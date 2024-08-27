import React from "react";
import image from "../../assets/download.gif";

const Hero = () => {
  return (
    <div className="relative h-screen flex mt-40 justify-center">
      {/* Image container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:right-1/2 overflow-hidden">
        <img src={image} alt="" className="w-80 h-auto mx-auto md:mx-0" />
      </div>

      {/* Text container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full mt-10 md:w-auto px-4 md:pl-12 flex items-center md:right-80">
        {" "}
        {/* Increased md:right-24 */}
        <div className="w-full font-ibm-plex-mono text-center md:text-left">
          <p>I'm Chaitanya—</p>
          <p>developer, technologist,</p>
          <p>Microsoft Student Ambassador.</p>
          <p>I'm passionate about creating innovative solutions and</p>
          <p>exploring new technologies. Let's connect!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
