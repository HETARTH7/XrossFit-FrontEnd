import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Exercises from "./Exercises";
import CreateExercise from "./CreateExercise";
import AdminLogin from "./AdminLogin";
import AdminPortal from "./AdminDashboard";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
