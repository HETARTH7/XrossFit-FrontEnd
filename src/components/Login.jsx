import React, { useState } from "react";
import axios from "axios";
const Login = () => {
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
      .post("http://localhost:5000/user/auth", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form>
        <label>Email</label>
        <input onChange={newUserEnter} />
        <label>Password</label>
        <input onChange={newPasswordEnter} />
        <button onClick={onClick}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
