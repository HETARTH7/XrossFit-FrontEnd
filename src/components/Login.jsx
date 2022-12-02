import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Back from "./Back";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [mssg, setMssg] = useState("");
  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios
      .post("http://localhost:5000/auth", user)
      .then((res) => setAuth(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (auth === "OK") {
      sessionStorage.setItem("user", username);
      window.location = "/dashboard";
    } else if (auth === "Wrong") {
      setMssg("Invalid. Please try again");
    }
  }, [username, auth]);
  return (
    <div>
      <Back />
      <div>
        <form className="login-form" onSubmit={login}>
          <h1 className="form-heading">Login</h1>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your Username"
            onChange={handleUser}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
          <p id="mssg">{mssg}</p>
          <button className="form-button">Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
