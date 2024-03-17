import { Heading } from "@chakra-ui/react";
import React from "react";

const Products = () => {
  return (
    <div>
      {" "}
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign="center"
        color="Tomato"
      >
        Products Section
      </Heading>
    </div>
  );
};

export default Products;
