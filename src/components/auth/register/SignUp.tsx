"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "react-query";

import { NextRouter, useRouter } from "next/router";

import { useEffect } from "react";

import { RegistrationStatus } from "@/api/auth/interfaces";
import fetchAuthRegisterUser from "@/api/auth/register";
import { signInRoute } from "../../../../consts";
import { RegisterUserSchema, Register } from "@/api/auth/schemas";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const router: NextRouter = useRouter();

  const destination = router.query.p?.toString() || "sign_in";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Register>({
    resolver: zodResolver(RegisterUserSchema),
  });

  const mutation = useMutation<
    RegistrationStatus,
    unknown,
    { email: string; name: string; password: string },
    unknown
  >({
    mutationFn: async ({ email, name, password }) => {
      try {
        const data = await fetchAuthRegisterUser(email, name, password);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          throw error.message;
        }
        throw "An error occurred during the registration";
      }
    },
    onSuccess: () => {
      router.replace(destination);
    },
  });

  const onSubmit: SubmitHandler<Register> = (data) => {
    try {
      mutation.mutate(data);

      return;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      }
      throw "An error occurred during sign-in.";
    }
  };

  useEffect(() => {
    router.prefetch(destination);
  }, [router, destination]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color="#0ea5ea">
            Register to have an account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          border="1px solid #222f43"
          bg="#131c31"
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {mutation.error?.toString() && (
              <Text color="red.500">{mutation.error.toString()}</Text>
            )}
            <Stack spacing={4}>
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register("name")} />
                {errors.name && (
                  <Text color="red.500">{errors.name.message}</Text>
                )}
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                {errors.email && (
                  <Text color="red.500">{errors.email.message}</Text>
                )}
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  {errors.password && (
                    <Text color="red.500">{errors.password.message}</Text>
                  )}
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"none"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                      bg="none"
                      size={"sm"}
                    >
                      {showPassword ? <BiShow /> : <BiHide />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="...registering"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link
                    color={"blue.400"}
                    href={
                      router.query.p
                        ? `${signInRoute}?p=${router.query.p}`
                        : signInRoute
                    }
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
