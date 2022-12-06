import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Back from "./Back";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [exists, setExists] = useState("");
  const [mssg, setMssg] = useState("");
  const newUserEnter = (e) => {
    setUsername(e.target.value);
  };
  const newPasswordEnter = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/user/add", newUser)
      .then((res) => setExists(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (exists === "OK") {
      window.location = "/";
    } else if (exists === "Exists") {
      setMssg("Username already exists. Enter new Username");
    }
  }, [exists]);
  return (
    <div>
      <Back />
      <div>
        <form className="login-form" onSubmit={onSubmit}>
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
          <p id="mssg">{mssg}</p>
          <button className="form-button">Register</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
