import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Exercises from "./Exercises";
import CreateExercise from "./CreateExercise";
import Back from "./Back";

const App = () => {
  const [user, setUser] = useState();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/track" element={<CreateExercise />} />
          <Route path="/exercises-list" element={<Exercises />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

const Login = ({setUser}) => {
  const handleChange = (e) => setUser(e.target.value);
  return (
    <div>
      <Back />
      <div>
        <form className="login-form">
          <h1 className="form-heading">Login</h1>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your Username"
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
          />
          <button className="form-button">
            <Link to={"/dashboard"}>Login</Link>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default App;
