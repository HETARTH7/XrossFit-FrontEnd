import React from "react";
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

const Login = () => {
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
            Login
          </FormLabel>
          <Input mt={30} type="email" placeholder="Enter your email" />
          <Input
            mt={30}
            mb={10}
            type="password"
            placeholder="Enter your password"
          />
          <Button colorScheme="red" ml={160} mt={20}>
            <Link style={{ textDecoration: "none" }}>Login</Link>
          </Button>
        </FormControl>
      </Box>

      <Footer />
    </div>
  );
};

export default Login;
