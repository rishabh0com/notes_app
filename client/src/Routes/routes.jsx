import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NoteList";
import AccountPage from "../Components/Account";

const AllRoutes = () => {
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
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
};

export default AllRoutes;
