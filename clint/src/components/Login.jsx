import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1212/user/register", {
        email,
        password,
      });
      const { token } = response.data;

      console.log("Token:", token);

      Navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={4}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" mb={6}>
          Login
        </Heading>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <form onSubmit={handleSubmit}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              bg="Tomato"
              type="submit"
              colorScheme="teal"
              size="lg"
              w="full"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
