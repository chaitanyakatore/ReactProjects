import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebaseContext";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const firebase = useFirebase();
  const { handleSignIn, signinWithGoogle, isLoggedIn } = useFirebase(); // Destructure the methods from context

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignIn(email, password);
      alert("User login successfully!");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Failed to login user. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <form onSubmit={handleSubmit}>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          <button
            type="button" // Add type="button" to prevent form submission
            onClick={signinWithGoogle}
            className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-200"
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.5 3.5 29.6 1.5 24 1.5 14.7 1.5 7 7.7 4.3 16h7.3c1.4-4.1 5.2-7 9.4-7z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.5-.1-3.1-.3-4.5H24v9h12.7c-.6 3-2.5 5.6-5.1 7.3l7.8 6C43.3 38.8 46.5 32 46.5 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M11.6 28.2c-1-3-1-6.4 0-9.4H4C1.4 22.6 0 26.2 0 30c0 3.8 1.4 7.4 4 10.2l7.6-5.9c-1.4-1.8-2.5-4.1-3-6.1z"
              />
              <path
                fill="#34A853"
                d="M24 47.5c6 0 11.4-2.1 15.3-5.7l-7.8-6c-2.1 1.4-4.7 2.2-7.5 2.2-4.2 0-8-2.8-9.4-7h-7.3c2.7 8.3 10.4 14.5 19.2 14.5z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
