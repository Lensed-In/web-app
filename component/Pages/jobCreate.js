import React from "react";
import { chakra, Box, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { JobCreate } from "../Models/JobCreate";

export const JobCreatePage = () => {
  // Button bgColor color#F4F2FF,#9B7BFD
  // const bgColor = useColorModeValue("brandMain", "blue.500");

  return (
    <Box px={8} py={8} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        shadow={"2xl"}
        p={8}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "2xl", md: "4xl" }}
          lineHeight="none"
          fontWeight="bold"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={"gray.500"}
        >
          Create a Job
        </chakra.h1>
        <JobCreate />
      </Box>
    </Box>
  );
};
