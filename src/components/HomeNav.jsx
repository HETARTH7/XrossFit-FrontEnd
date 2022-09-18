import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const HomeNav = () => {
  return (
    <div>
      <Box pt={5} pb={100} pr={5} textAlign={"right"}>
        <Button colorScheme="#000" color="#eee">
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Button>
        <Button colorScheme="#000" color="#D2001A">
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default HomeNav;
