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
      <Link className="nav-link" to={"/shop"}>
        Shop
      </Link>
      <div className="dropdown" style={{ float: "right" }}>
        <button className="dropbtn">User</button>
        <div className="dropdown-content">
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/settings"}>Settings</Link>
          <Link
            className="nav-link"
            to={"/"}
            onClick={() => sessionStorage.clear()}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
