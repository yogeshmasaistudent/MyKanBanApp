import React from "react";
import { Box, Heading, Text, Container, Stack, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={4}>
      <Container maxW="container.lg">
        <Stack spacing={6}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
            color="Tomato"
          >
            Welcome to My Creative Space
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            textAlign="center"
          >
            Explore the wonders of creativity and imagination! Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed aliquet lectus a quam
            sagittis, sed pretium ex congue. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Nulla
            facilisi. Mauris nec semper purus.
          </Text>
          <Box textAlign="center">
            <Image
              src="https://source.unsplash.com/random"
              alt="Creative Space"
              borderRadius="md"
              maxW="100%"
              boxShadow="lg"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
