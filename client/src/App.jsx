import { useState } from "react";
import "./App.css";
import CreateNote from "./Components/CreateNote";
import Navbar from "./Components/Navbar";
import NotesList from "./Components/NoteList";
import Popup from "./Components/Popup";
import LoginPage from "./Components/Login";
import Login from "./Components/Login";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
