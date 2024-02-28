import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Notes App</div>
      <div className="w-10">
        <img src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
