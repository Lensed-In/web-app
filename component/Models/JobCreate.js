import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

export const JobCreate = () => {
  return (
    <>
      <Box borderRadius="md" bg="white" color="white" m={2} p={2}>
        <FormControl>
          <FormLabel p={2} color={"black"}>
            Title
          </FormLabel>
          <Input id="title" type="title" />
          <FormLabel p={2} color={"black"}>
            Title
          </FormLabel>
          <Input id="title" type="title" />
          <SimpleGrid column={2} minChildWidth="360px">
            <div mx={2}>
              <FormLabel p={2} color={"black"}>
                Location
              </FormLabel>
              <Input id="location" type="location" />
            </div>
            <div mx={2}>
              <FormLabel p={2} mx={2} color={"black"}>
                Salary
              </FormLabel>
              <Input id="salary" type="salary" />
            </div>
          </SimpleGrid>

          <FormLabel p={2} mx={2} color={"black"}>
            Description
          </FormLabel>
          <Textarea
            // value={value}
            // onChange={handleInputChange}
            placeholder="Description placeholder"
            size="md"
          />
        </FormControl>
        <Center p={4}>
          <Button backgroundColor="brandMain" size="lg">
            Create Job
          </Button>
        </Center>
      </Box>
    </>
  );
};
