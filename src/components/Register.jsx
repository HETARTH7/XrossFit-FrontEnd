import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const newUserEnter = (e) => {
    setUsername(e.target.value);
  };
  const newPasswordEnter = (e) => {
    setPassword(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/user/add", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Create your new account</h1>
      <form>
        <input onChange={newUserEnter} placeholder="Email"></input>
        <input onChange={newPasswordEnter} placeholder="Password"></input>
        <button onClick={onClick}>
          <Link to={"/about"}>Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
