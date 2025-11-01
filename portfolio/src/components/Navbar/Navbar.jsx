import React from "react";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

const Navbar = () => {
  return (
    <div>
      {/* <h1>This is a Navbar</h1> */}

      <LeftNav />
      <RightNav />
    </div>
  );
};

export default Navbar;
