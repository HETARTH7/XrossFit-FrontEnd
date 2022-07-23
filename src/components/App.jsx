import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
