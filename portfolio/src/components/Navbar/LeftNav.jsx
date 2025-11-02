import React from "react";
import "./navbar.css";
import mypic from "../../assets/images/mypicLg.jpg";

const LeftNav = () => {
  return (
    <div className="left-nav flex m-2">
      <img
        className="w-15 h-15 rounded-full"
        src={mypic}
        alt="CodeWithIshant"
      />
      <h2 className="p-3 font-bold font-sans text-3xl">CodeWithIshant</h2>
    </div>
  );
};

export default LeftNav;
