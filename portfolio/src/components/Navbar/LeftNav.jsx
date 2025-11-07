import React from "react";
import "./navbar.css";
import mypic from "../../assets/images/mypicLg.jpg";

const LeftNav = () => {
  return (
    <div className="left-nav flex m-2">
      <img
        className="w-15 h-15 rounded-full shadow-cyan-300 shadow-[0px_0px_12px_4px] border-cyan-400  "
        src={mypic}
        alt="CodeWithIshant"
      />
      <h2 className="p-3 font-bold text-3xl text-cyan-400 underline font-mono ">
        CodeWithIshant
      </h2>
    </div>
  );
};

export default LeftNav;
