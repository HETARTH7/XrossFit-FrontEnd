import { Link } from "react-router-dom";
import React from "react";

const HomeNav = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="nav-link" to={"/login"}>
          Login
        </Link>
        <Link className="nav-link" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
