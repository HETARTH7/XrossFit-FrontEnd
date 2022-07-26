import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";

const CreateExercise = () => {
  const username = sessionStorage.getItem("user");
  const [exercises, setExercises] = useState([]);
  axios
    .get(`http://localhost:5000/exercise/${username}`)
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

  const [exerciseName, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeDate = (date) => {
    setDate(date);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      exerciseName: exerciseName,
      duration: duration,
      date: date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercise/add", exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <h3>Add Exercises</h3>
      <br />
      <form onSubmit={onSubmit}>
        <div className="form-group"></div>
        <div className="form-group">
          <label>
            <h5>EXERCISE</h5>
          </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            value={exerciseName}
            onChange={onChangeDescription}
          />
          <br />
        </div>
        <div className="form-group">
          <label>
            <h5>DURATION</h5>
          </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
          <br />
        </div>
        <div className="form-group">
          <label>
            <h5>DATE</h5>
          </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <br />
          <input type="submit" value="ADD" className="btn btn-primary" />
          <br />
        </div>
      </form>
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

export default CreateExercise;
