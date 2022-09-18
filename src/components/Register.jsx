import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Back from "./Back";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const newUserEnter = (e) => {
    setUsername(e.target.value);
  };
  const newPasswordEnter = (e) => {
    setPassword(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/user/add", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Back />
      <Box
        w={400}
        h={500}
        mt={150}
        ml={650}
        borderRadius={20}
        backgroundColor="#eee"
      >
        <FormControl>
          <FormLabel textAlign={"center"} fontSize={30}>
            Create New Account
          </FormLabel>
          <Input
            onChange={newUserEnter}
            mt={30}
            type="email"
            placeholder="Enter your email"
          />
          <Input
            onChange={newPasswordEnter}
            mt={30}
            mb={10}
            type="password"
            placeholder="Enter your password"
          />
          <Button onClick={onClick} colorScheme="red" ml={160} mt={20}>
            <Link style={{ textDecoration: "none" }}>Register</Link>
          </Button>
        </FormControl>
      </Box>

      <Footer />
    </div>
  );
};

export default Register;
