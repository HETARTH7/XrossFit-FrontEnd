import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Link to={"/"} style={{ color: "#eee" }}>
      ← Back
    </Link>
  );
};

export default Back;
