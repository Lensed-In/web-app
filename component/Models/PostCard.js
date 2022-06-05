import { Box, Avatar, Heading, Text, HStack } from "@chakra-ui/react";

export const PostCard = () => {
  return (
    <>
      <Box borderRadius="md" bg="white" color="white" m={4} p={4}>
        <HStack color="white">
          <Avatar
            mx={2}
            size={"md"}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Box mt={4}>
            <Heading fontSize="xl" color={"GrayText"}>
              Dan Abrahmov
            </Heading>
            <Text color={"GrayText"} fontSize="md">
              @damke4w
            </Text>
          </Box>
        </HStack>
        <Text color={"GrayText"} p={2}>
          lolem ipsum dolor sit amet consectetur adipisicing elit. lolem ipsum
          dolor sit amet consectetur adipisicing elit.
        </Text>
      </Box>
    </>
  );
};
