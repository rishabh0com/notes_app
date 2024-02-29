import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import demoImg from "../assets/demoAcc.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  console.log("states: ", auth);
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <NavLink to="/">
        {" "}
        <div className="text-white text-2xl font-bold">Notes App</div>
      </NavLink>
      <NavLink to="/account">
        {" "}
        <div className="w-10">
          <img className="rounded-full" src={auth ? "" : demoImg} alt="" />
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
