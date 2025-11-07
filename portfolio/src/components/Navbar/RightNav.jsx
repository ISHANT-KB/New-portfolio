import React from "react";

const RightNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-6 text-cyan-100 text-lg">
          <a className="cursor-pointer transition duration-300 hover:text-cyan-400 hover:underline">
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
