import React, { useState } from "react";
import Footer from "./Footer";
import Back from "./Back";

const Login = () => {
  const [user, setUser] = useState("");
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", user);
    window.location = "/dashboard";
  };
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
          />
          <button className="form-button">Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
