import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Exercises = () => {
  const [part, setPart] = useState([]);
  const [displayPart, setDisplayPart] = useState("All");
  const [exercise, setExercise] = useState([]);
  axios
    .get("http://localhost:5000/bodypart")
    .then((res) => setPart(res.data))
    .catch((err) => console.log(err));
  axios
    .get(`http://localhost:5000/bodyexercise/${displayPart}`)
    .then((res) => setExercise(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <Navbar />
      {part.map((x, index) => {
        return (
          <p
            onClick={() => {
              setDisplayPart(x.name);
            }}
            key={index}
          >
            {x.name}
          </p>
        );
      })}
      <h1>{displayPart} Exercises</h1>
      {exercise.map((x, index) => {
        return <p key={index}>{x.name}</p>;
      })}
    </div>
  );
};

export default Exercises;
