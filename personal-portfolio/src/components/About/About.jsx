import React from "react";
import image from "../../assets/download.gif";

const About = () => {
  return (
    <div>
      <hr className="border-black font-bold" />
      <div className="flex justify-between m-4 font-serif">
        <div className="ml-4 font-bold text-xl">About</div>{" "}
        <div className="mr-4 text-22">A bit about me</div>{" "}
      </div>
      <hr className="border-black font-bold" />
      <div>
        <div className="flex">
          <div className="w-80">
            <img src={image} alt="" />
          </div>
          <div>hello my name is Chaitnya i Love to travel</div>
        </div>
      </div>
    </div>
  );
};

export default About;
