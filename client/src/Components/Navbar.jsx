import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <NavLink to="/">
        {" "}
        <div className="text-white text-2xl font-bold">Notes App</div>
      </NavLink>
      <NavLink to="/login">
        {" "}
        <button className="bg-white p-2 rounded-md">Login</button>{" "}
      </NavLink>
      <NavLink to="/account">
        {" "}
        <button className="bg-white p-2 rounded-md">Account</button>
      </NavLink>
      <div className="w-10">
        <img src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
