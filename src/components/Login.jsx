import React from "react";
import Footer from "./Footer";
import Back from "./Back";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Back />
      <div>
        <form className="login-form">
          <h1 className="form-heading">Login</h1>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your Username"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
          />
          <button className="form-button">
            <Link to={"/dashboard"}>Login</Link>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
