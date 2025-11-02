import React from "react";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <LeftNav />
      <RightNav />
    </div>
  );
};

export default Navbar;
