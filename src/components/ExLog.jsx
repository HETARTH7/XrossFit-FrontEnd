import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
const ExLog = () => {
  const [exercises, setExercises] = useState([]);
  axios
    .get("http://localhost:5000/exercise")
    .then((res) => setExercises(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>exercise</th>
            <th>duration</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => {
            return (
              <tr key={index}>
                <td key={exercise.username}>{exercise.username}</td>
                <td key={exercise.exerciseName}>{exercise.exerciseName}</td>
                <td key={exercise.duration}>{exercise.duration}</td>
                <td key={exercise.date}>{exercise.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExLog;
