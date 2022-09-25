import React from "react";
import Typewriter from "typewriter-effect";
import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("HELLO")
              .pauseFor(800)
              .deleteAll()
              .typeString("<strong>Welcome to the App</strong>")
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default Home;
