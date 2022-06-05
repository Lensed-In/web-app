import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const bg = useColorModeValue("white", "inherit");
  const color = useColorModeValue("white", "inherit");
  const borderColor = useColorModeValue("gray.400", "blue.500");

  return (
    <Box bg={bg} color={color}>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={borderColor}
        color={useColorModeValue("gray.900", "blue.500")}
      >
        <Container maxW={"6xl"} py={4}>
          <Text align="center">© 2022 Lensed-In</Text>
        </Container>
      </Box>
    </Box>
  );
};
