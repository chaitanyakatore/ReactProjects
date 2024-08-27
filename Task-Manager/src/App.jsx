import React from "react";
import { Sidebar, Hero, Footer } from "./components";

const App = () => {
  return (
    <div className="flex bg-black text-white ">
      <div className="planner">
        <h1>12 Weeks Year</h1>
      </div>
      <div className="h-full bg-red-500 w-30%">
        <Sidebar />
      </div>
      <div className="h-1/2 bg-blue-500 w-70%">
        <Hero />
      </div>
      <div className="h-1/2 fixed bottom-0 bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
