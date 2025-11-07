import React from "react";

const RightNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-6 text-lg mt-4 mr-4 font-medium text-cyan-200">
          <a className="cursor-pointer">
            <li>Home</li>
          </a>
          <a className="cursor-pointer">
            <li>About</li>
          </a>
          <a className="cursor-pointer">
            <li>Skills</li>
          </a>
          <a className="cursor-pointer">
            <li>Projects</li>
          </a>
          <a className="cursor-pointer">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default RightNav;
