import React from "react";
import { Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <Heading color="#fff" fontSize={60}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("HELLO")
              .pauseFor(800)
              .deleteAll()
              .typeString("Welcome to the GYM App")
              .start();
          }}
        />
      </Heading>

      <Footer />
    </div>
  );
};

export default Home;
