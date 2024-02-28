import React from "react";
// import { ReactComponent as GoogleLogo } from "./google_logo.svg";
// 31121461780 - o52l9ppaac3oeh9fehrhqa86d71b8jtl.apps.googleusercontent.com;
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="p-2 border border-gray-400 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-400 rounded-md"
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Login
          </button>
        </form>
        <div className="text-center my-4">or</div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />{" "}
      </div>
    </div>
  );
};

export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <input
//           type="text"
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
//           Sign In
//         </button>
//         <div className="flex items-center justify-center mt-4 space-x-2">
//           <div className="border-b w-1/3"></div>
//           <span>or</span>
//           <div className="border-b w-1/3"></div>
//         </div>
//         <button className="w-full p-2 bg-red-500 hover:bg-red-700 text-white rounded mt-4">
//           Sign In with Google
//         </button>
//         <div className="mt-4 flex justify-center">
//           {/* Empty space for Google logo */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
