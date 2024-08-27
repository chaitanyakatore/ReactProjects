import React from "react";
import Card from "../Card/Card";
import image from "../../assets/travel_booking.png";

const Work = () => {
  return (
    <div>
      <hr className="border-black font-bold" />
      <div className="flex justify-between m-4 font-serif">
        <div className="ml-4 font-bold text-xl">Work</div>{" "}
        <div className="mr-4">Internship / ideation / innovation</div>{" "}
      </div>
      <hr className="border-black font-bold" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Adjust the grid setup here */}
        <Card
          image={image}
          title="Travel Booking"
          desc="This static website is made using reactjs and it is completely responsive and functional."
        />
        <Card image={image} title="Project Title" desc="Project Description" />
        <Card image={image} title="Project Title" desc="Project Description" />
        <Card image={image} title="Project Title" desc="Project Description" />
        <Card image={image} title="Project Title" desc="Project Description" />
        <Card image={image} title="Project Title" desc="Project Description" />
      </div>
    </div>
  );
};

export default Work;
