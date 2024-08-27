import React from "react";
import { About, Header, Hero, Skills, Work, Footer } from "./components";

const App = () => {
  return (
    <div className="color-red">
      <Header />
      <hr className="border-black font-bold" />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default App;
