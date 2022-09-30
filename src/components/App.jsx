import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import ExLog from "./ExLog";
import Exercises from "./Exercises";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<ExLog />} />
          <Route path="/exercises-list" element={<Exercises />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
