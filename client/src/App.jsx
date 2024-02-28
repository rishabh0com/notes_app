import { useState } from "react";
import "./App.css";
import CreateNote from "./Components/CreateNote";
import Navbar from "./Components/Navbar";
import NotesList from "./Components/NoteList";
import Popup from "./Components/Popup";
import LoginPage from "./Components/Login";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="lg:flex w-100  justify-around ">
        <CreateNote />
        <NotesList />
      </div>
      <Popup />
      <Login />
    </>
  );
}

export default App;
