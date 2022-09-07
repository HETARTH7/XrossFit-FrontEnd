import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to the GYM Application</h1>
      <button>
        <Link to={"/login"}>Login</Link>
      </button>
      <button>
        <Link to={"/signup"}>Signup</Link>
      </button>
    </div>
  );
};

export default Home;
