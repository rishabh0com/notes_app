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
import { Provider } from "react-redux";
import { store } from "./Redux/store.redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <AllRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
