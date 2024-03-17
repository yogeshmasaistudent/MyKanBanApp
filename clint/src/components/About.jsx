import React from "react";
import { Box, Heading, Text, Container, Stack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Container maxW="container.lg">
        <Stack spacing={6}>
          <Heading
            color="Tomato"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
          >
            About Our Project
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            textAlign="center"
          >
            Our project is a web application designed to facilitate user
            authentication. We utilize MongoDB as our database management system
            and Mongoose as the Object Data Modeling (ODM) library for Node.js
            and MongoDB.
          </Text>

          <Box textAlign="center">
            <Heading fontSize="2xl" mb={4}>
              Packages Used
            </Heading>
            <Text fontSize="lg">
              - React
              <br />
              - Chakra UI
              <br />
              - React Router
              <br />
              - Express
              <br />
              - MongoDB
              <br />
              - Axios
              <br />- etc.
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize="2xl" mb={4}>
              Screenshots
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={6}>
              <Image
                src="https://source.unsplash.com/random/300x200"
                alt="Screenshot 1"
              />
              <Image
                src="https://source.unsplash.com/random/300x200"
                alt="Screenshot 2"
              />
              <Image
                src="https://source.unsplash.com/random/300x200"
                alt="Screenshot 3"
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
