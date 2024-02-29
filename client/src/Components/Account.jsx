import React from "react";

const AccountPage = () => {
  return (
    <div className="flex items-center justify-center  bg-white h-80">
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1709109447~exp=1709113047~hmac=01f007057696dc9e48ae1c288f6ae2c94e980cd7c6c997b8886f66035fa2bfd3&w=740"
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
