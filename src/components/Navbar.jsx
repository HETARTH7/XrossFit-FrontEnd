import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-link" to={"/dashboard"}>
        HOME
      </Link>
      <Link className="nav-link" to={"/track"}>
        Track Exercise
      </Link>

      <Link className="nav-link" to={"/exercises-list"}>
        Exercises
      </Link>
    </div>
  );
};

export default Navbar;
