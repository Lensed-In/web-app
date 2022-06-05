import {
  Box,
  Avatar,
  Button,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
export const JobCard = () => {
  const router = useRouter();
  return (
    <Box
      borderRadius="md"
      bg="white"
      color="white"
      m={4}
      p={4}
      onClick={() => router.push("/job/anyID")}
    >
      <HStack color="white">
        <Image
          boxSize="50px"
          rounded={true}
          objectFit="cover"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
          alt="Dan Abramov"
        />
        <VStack mt={4}>
          <Text fontSize="xl" color={"blackAlpha.900"} p={4}>
            Software Engineer Internship(Fall)
            <Text color={"GrayText"} fontSize="md">
              Tesla
            </Text>
          </Text>
        </VStack>
      </HStack>
      <HStack m={4}>
        <Button
          leftIcon={<FiMapPin />}
          colorScheme="gray"
          size="sm"
          color={"blackAlpha.600"}
        >
          Remote
        </Button>
        <Button
          leftIcon={<RiMoneyCnyCircleLine />}
          colorScheme="gray"
          size="sm"
          color={"blackAlpha.600"}
        >
          $100k+ ~ $200k
        </Button>
      </HStack>
    </Box>
  );
};
