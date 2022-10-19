import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Exercises from "./Exercises";
import CreateExercise from "./CreateExercise";

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

export default App;
