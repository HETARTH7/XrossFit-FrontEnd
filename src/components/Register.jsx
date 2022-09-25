import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Back from "./Back";
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
      <Back />
      <div>
        <form className="login-form">
          <h1 className="form-heading">Create New Account</h1>
          <input
            className="form-input"
            onChange={newUserEnter}
            type="text"
            placeholder="Enter your Username"
          />
          <input
            className="form-input"
            onChange={newPasswordEnter}
            type="password"
            placeholder="Enter your password"
          />
          <button className="form-button" onClick={onClick}>
            <Link to={"/dashboard"}>Register</Link>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
