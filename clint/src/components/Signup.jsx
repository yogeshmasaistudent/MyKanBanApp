import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
      const response = await axios.post("http://localhost:1212/user/register", {
        username,
        email,
        DOB,
        role,
        location,
        password,
      });
      console.log("User registered successfully:", response.data);
      Navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={4}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" mb={6}>
          Registration Form
        </Heading>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <form onSubmit={handleSubmit}>
            <FormControl id="username" mb={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="DOB" mb={4}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
            </FormControl>
            <FormControl id="role" mb={4}>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder="Select role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="explorer">Explorer</option>
              </Select>
            </FormControl>
            <FormControl id="location" mb={4}>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirmPassword" mb={6}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              bg="Tomato"
              type="submit"
              colorScheme="teal"
              size="lg"
              w="full"
            >
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;



// done