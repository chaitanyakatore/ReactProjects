import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-5 font-serif font-bold">
      {/* Always show name */}
      <div className="text-2xl">
        {/* Center the name on smaller screens */}
        <div className="text-center md:text-left">Chaitanya Katore</div>
      </div>

      {/* Show list items only on larger screens */}
      <div className="hidden md:block">
        <ul className="list-none flex space-x-10 text-xl">
          <li className="mr-2">Work</li>
          <li className="mr-2">Skill</li>
          <li className="mr-2">About</li>
          <li className="mr-2">Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
