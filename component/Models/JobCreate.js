import { useRouter } from "next/router";
import {
  Box,
  FormLabel,
  Button,
  Textarea,
  Input,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const JobCreate = () => {
  const router = useRouter();
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
    router.push("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <>
      <Box borderRadius="md" bg="white" color="white" m={2} p={2}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <FormLabel color={"black"}>Title</FormLabel>
          <Input {...register("title")} id="title" type="title" color="black" />
          <SimpleGrid column={2} minChildWidth="360px" spacing={4} py={2}>
            <Box>
              <FormLabel color={"black"}>Organization</FormLabel>
              <Input
                {...register("organization")}
                id="organization"
                type="organization"
                color="black"
              />
            </Box>
            <Box>
              <FormLabel color={"black"}>Role</FormLabel>
              <Input
                {...register("role")}
                id="role"
                type="role"
                color="black"
              />
            </Box>
            <Box>
              <FormLabel color={"black"}>Location</FormLabel>
              <Input
                {...register("location")}
                id="location"
                type="location"
                color="black"
              />
            </Box>
            <Box>
              <FormLabel color={"black"}>Salary</FormLabel>
              <Input
                {...register("salary")}
                id="salary"
                type="salary"
                color="black"
              />
            </Box>
          </SimpleGrid>

          <FormLabel color={"black"}>Description</FormLabel>
          <Textarea
            // value={value}
            // onChange={handleinputChange}
            {...register("detail")}
            placeholder="Description placeholder"
            size="md"
            color={"black"}
          />

          <Center p={4}>
            <Button
              backgroundColor="brandMain"
              size="lg"
              type="submit"
              onClick={() => onSubmitHandler()}
            >
              Create Job
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};
