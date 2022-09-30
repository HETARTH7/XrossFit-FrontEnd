import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
const ExLog = () => {
  const [exercises, setExercises] = useState([]);
  axios
    .get("http://localhost:5000/exercise")
    .then((res) => setExercises(res.data))
    .catch((err) => console.log(err));
  const deleteExercise = (id) => {
    axios
      .post(`http://localhost:5000/exercise/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setExercises((prevValue) => {
      return prevValue.filter((index) => {
        return index._id !== id;
      });
    });
  };
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
                <td>{exercise.username}</td>
                <td>{exercise.exerciseName}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date}</td>
                <td>
                  <button onClick={() => deleteExercise(exercise._id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExLog;
