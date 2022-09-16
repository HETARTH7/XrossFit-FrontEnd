import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button>
          <Link to={"/about"}>Sign In</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
