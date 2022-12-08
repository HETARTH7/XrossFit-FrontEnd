import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-link" to={"/admindashboard"}>
        HOME
      </Link>
      <Link className="nav-link" to={"/manageusers"}>
        Users
      </Link>
      <Link className="nav-link" to={"/stock"}>
        Stock
      </Link>
      <Link id="logout" to={"/"}>Logout</Link>
    </div>
  );
};

export default Navbar;
