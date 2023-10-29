"use client";

import { fetchAuthSignUser } from "@/api/auth";
import { Login, LoginUserSchema } from "@/api/auth/schemas";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { LoginStatus } from "@/api/auth/interfaces";
import Cookies from "js-cookie";
import { NextRouter, useRouter } from "next/router";

import { useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN, signUpRoute } from "../../../../consts";
import { getActions } from "@/store";
export default function SignIn() {
  const router: NextRouter = useRouter();

  const { setAccessToken, setRefreshToken } = getActions();

  const destination = router.query.p?.toString() || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>({
    resolver: zodResolver(LoginUserSchema),
  });

  const mutation = useMutation<
    LoginStatus,
    unknown,
    { email: string; password: string },
    unknown
  >({
    mutationFn: async ({ email, password }) => {
      try {
        const data = await fetchAuthSignUser(email, password);

        return data;
      } catch (error) {
        if (error instanceof Error) {
          throw error.message;
        }
        throw "An error occurred during sign-in.";
      }
    },
    onSuccess: (data) => {
      Cookies.set(REFRESH_TOKEN, data.data.refresh_token, {
        secure: true,
        expires: 7,
        sameSite: "none",
      });
      Cookies.set(ACCESS_TOKEN, data.data.access_token, {
        expires: 1 / 24,
      });
      setAccessToken(data.data.access_token);
      setRefreshToken(data.data.refresh_token);
      router.replace(destination);
    },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
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
          <Heading
            fontSize={"4xl"}
            as={"h1"}
            color="#0ea5ea"
            fontFamily="Lato, sans-serif, serif"
          >
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          border="1px solid #222f43"
          bg="#131c31"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {mutation.error?.toString() && (
              <Text color="red.500">{mutation.error.toString()}</Text>
            )}
            <Stack spacing={4}>
              <FormControl>
                <FormLabel color="#b9e0f2 ">Email address</FormLabel>
                <Input type="email" {...register("email")} />
                {errors.email && (
                  <Text color="red.500">{errors.email.message}</Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel color="#b9e0f2 ">Password</FormLabel>
                <Input type="password" {...register("password")} />
                {errors.password && (
                  <Text color="red.500">{errors.password.message}</Text>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Text color="white">
                    Do you have an account?{" "}
                    <Link
                      color={"blue.400"}
                      href={
                        router.query.p
                          ? `${signUpRoute}?p=${router.query.p}`
                          : signUpRoute
                      }
                      _hover={{ color: "white" }}
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  disabled={mutation.isLoading}
                  isLoading={isSubmitting}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
