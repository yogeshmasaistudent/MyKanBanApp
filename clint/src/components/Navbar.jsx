import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="2xl"
        alignItems="center"
        bg="Tomato"
        color="white"
        w="100%"
        h="80px"
        className="flex justify-around"
      >
        <Box>mini_PROJECT</Box>
        <Box w="40%" className="flex justify-around">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Button>
          <Link to="/signup">Sign up</Link>
          </Button>
           
           <Button><Link to="/login">Log in</Link></Button>

       
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
