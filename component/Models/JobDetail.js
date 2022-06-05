import {
  Box,
  Avatar,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  AvatarGroup,
  VStack,
  Center,
} from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
export const JobDetail = () => {
  return (
    <Box borderRadius="md" bg="brandBackGround" color="white" m={8} p={8}>
      <Box>
        <Heading fontSize="4xl" color={"GrayText"}>
          Software Engineer Internship(Fall)
        </Heading>
        <HStack color="white" p={4}>
          <Image
            boxSize="70px"
            rounded={true}
            objectFit="cover"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
            alt="Dan Abramov"
          />
          <VStack mt={4}>
            <Text fontSize="xl" color={"blackAlpha.900"} p={4}>
              Tesla
              <Text color={"GrayText"} fontSize="md">
                Mountain View, CA
              </Text>
            </Text>
          </VStack>
        </HStack>
        <HStack m={4}>
          <Button
            leftIcon={<FiMapPin />}
            colorScheme="gray"
            size="md"
            backgroundColor={"white"}
            Ground
            color={"blackAlpha.600"}
          >
            Remote
          </Button>
          <Button
            leftIcon={<RiMoneyCnyCircleLine />}
            colorScheme="gray"
            size="md"
            backgroundColor={"white"}
            color={"blackAlpha.600"}
          >
            $100k+ ~ $200k
          </Button>
        </HStack>
      </Box>
      <SimpleGrid columns={2} minChildWidth="70px">
        <VStack>
          <Text color={"GrayText"} fontSize="md">
            Posted by
          </Text>
          <HStack
            backgroundColor={"white"}
            maxW="sm"
            //   borderWidth="1px"
            p={2}
            rounded={"3xl"}
          >
            <Avatar
              mx={2}
              size={"sm"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text color={"GrayText"} fontSize="md">
              0x4n2y889fda3n2lnjfo820834
            </Text>
          </HStack>
        </VStack>
        <VStack alignContent={"end"}>
          <Text color={"GrayText"} fontSize="sm">
            1.2k applied
          </Text>
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </VStack>
      </SimpleGrid>
      <Text color={"GrayText"} p={8}>
        lolem ipsum dolor sit amet consectetur adipisicing elit. lolem ipsum
        dolor sit amet consectetur adipisicing elit. lolem ipsum dolor sit amet
        consectetur adipisicing elit. lolem ipsum dolor sit amet consectetur
        adipisicing elit. lolem ipsum dolor sit amet consectetur adipisicing
        elit. lolem ipsum dolor sit amet consectetur adipisicing elit. lolem
        ipsum dolor sit amet consectetur adipisicing elit. lolem ipsum dolor sit
        amet consectetur adipisicing elit. lolem ipsum dolor sit amet
        consectetur adipisicing elit. lolem ipsum dolor sit amet consectetur
        adipisicing elit. lolem ipsum dolor sit amet consectetur adipisicing
        elit. lolem ipsum dolor sit amet consectetur adipisicing elit. lolem
        ipsum dolor sit amet consectetur adipisicing elit. lolem ipsum dolor sit
        amet consectetur adipisicing elit. lolem ipsum dolor sit amet
        consectetur adipisicing elit. lolem ipsum dolor sit amet consectetur
        adipisicing elit. lolem ipsum dolor sit amet consectetur adipisicing
        elit. lolem ipsum dolor sit amet consectetur adipisicing elit. lolem
        ipsum dolor sit amet consectetur adipisicing elit. lolem ipsum dolor sit
        amet consectetur adipisicing elit. lolem ipsum dolor sit amet
        consectetur adipisicing elit. lolem ipsum dolor sit amet consectetur
        adipisicing elit.
      </Text>
      <Center>
        <Button backgroundColor="brandMain" size="lg">
          Apply
        </Button>
      </Center>
    </Box>
  );
};
