import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRERv0O6QSe6GBJu7UCf21mXQrPph5Qqg",
  authDomain: "open-source-19f80.firebaseapp.com",
  projectId: "open-source-19f80",
  storageBucket: "open-source-19f80.appspot.com",
  messagingSenderId: "767205176371",
  appId: "1:767205176371:web:83f26ca12a1823ed8d5f46",
};

// Initialize Firebase app
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

// Initialize authentication
export const firebaseAuth = getAuth(firebaseApp);

// Initialize Google provider
export const googleProvider = new GoogleAuthProvider();

// Define the context value type
interface FirebaseContextType {
  signupUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;

  handleSignIn: (email: string, password: string) => Promise<void>;

  signinWithGoogle: () => Promise<void>;

  isLoggedIn: boolean; // Add isLoggedIn to the context type
}

// Create a context with the Firebase app instance
const FirebaseContext = createContext<FirebaseContextType | null>(null);

// Custom hook to use the Firebase app
export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

// FirebaseProvider component to provide the Firebase app to the component tree
export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Correct state declaration

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const signupUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error;
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      await firebaseSignInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
    } catch (error) {
      console.error("Error in sign-in with Google:", error);
      throw error;
    }
  };

  const isLoggedIn = user !== null; // Determine login status

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        handleSignIn,
        signinWithGoogle,
        isLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
