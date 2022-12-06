import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Dashboard from "./user/Dashboard";
import Exercises from "./user/Exercises";
import CreateExercise from "./user/CreateExercise";
import AdminLogin from "./admin/AdminLogin";
import AdminPortal from "./admin/AdminDashboard";
import Profile from "./user/Profile";
import Settings from "./user/Settings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminPortal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<CreateExercise />} />
          <Route path="/exercises-list" element={<Exercises />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
