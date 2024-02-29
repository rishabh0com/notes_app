import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="143817650055-6d4sn9h6gvfkqp61qcglq6c38vf0q00r.apps.googleusercontent.com"> */}
      {" "}
      <App />
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
