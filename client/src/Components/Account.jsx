import React from "react";
import demoImg from "../assets/demoAcc.png";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <div className="flex items-center justify-center  bg-white h-80">
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <img
          src={auth ? "" : demoImg}
          alt="User Profile Picture"
          className="rounded-full h-16 w-16 mb-4 mx-auto"
        />
        <div className="text-lg font-bold mb-2">John Doe</div>
        <div className="mb-2">john.doe@example.com</div>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded"
          onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
