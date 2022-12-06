import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Exercises = () => {
  const [part, setPart] = useState([]);
  const [displayPart, setDisplayPart] = useState("");
  axios
    .get("http://localhost:5000/bodypart")
    .then((res) => setPart(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      {part.map((x, index) => {
        return (
          <p
            onClick={() => {
              setDisplayPart(x.name);
            }}
            key={index}
          >
            {x.name}
          </p>
        );
      })}
      {displayPart}
    </div>
  );
};

export default Exercises;
