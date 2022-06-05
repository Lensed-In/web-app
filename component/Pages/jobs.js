import React from "react";
import { chakra, Box, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { JobCard } from "../Models/JobCard";

export const JobsPage = () => {
  // Button bgColor color#F4F2FF,#9B7BFD
  // const bgColor = useColorModeValue("brandMain", "blue.500");

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
          Jobs
        </chakra.h1>
        <SimpleGrid columns={2} minChildWidth="360px">
          <JobCard /> <JobCard />
          <JobCard /> <JobCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
