import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NoteList";
import AccountPage from "../Components/Account";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const auth = useSelector((state) => state.auth);
  console.log("states: ", auth);
  const Home = () => {
    return (
      <div className="lg:flex w-100  justify-around ">
        <CreateNote />
        <NotesList />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={auth && <Home /> && <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
};

export default AllRoutes;
