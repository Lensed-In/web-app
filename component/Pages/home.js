import React from "react";
import { chakra, Box, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { PostCard } from "../Models/PostCard";

export const Home = () => {
  return (
    <Box px={8} py={8} mx="auto" bgColor="brandBackGround">
      <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto">
        <chakra.h1
          mb={6}
          fontSize={{ base: "2xl", md: "4xl" }}
          lineHeight="none"
          fontWeight="bold"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={"gray.500"}
        >
          Post
        </chakra.h1>
        <SimpleGrid columns={2} minChildWidth="360px">
          <PostCard />
          <PostCard /> <PostCard />
          <PostCard /> <PostCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
