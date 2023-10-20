"use client";

import { Center, Heading, Text } from "@chakra-ui/react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../../../consts";
import { NextRouter, useRouter } from "next/router";
import { fetchRefeshToken } from "@/api/auth/refresh";
import { useEffect } from "react";

export default function RefreshForm() {
  const router: NextRouter = useRouter();

  console.log(Cookies.get(REFRESH_TOKEN));

  const destination = router.query.p?.toString() || "/dashboard";

  const handleRefresh = async () => {
    try {
      const data = await fetchRefeshToken();

      if (!data) {
        throw new Error("No data returned from server");
      }

      Cookies.set(REFRESH_TOKEN, data.data.refreshToken, {
        secure: true,
        expires: 7,
        sameSite: "none",
      });
      Cookies.set(AUTH_TOKEN, data.data.authToken, { expires: 1 / 24 });

      router.replace(destination);
      return;
    } catch (error) {
      console.error("Error refreshing tokens:", error);
    }
  };

  useEffect(() => {
    router.prefetch(destination);
  }, [router, destination]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        border="1px solid #222f43"
        bg="#131c31"
        rounded={"lg"}
        boxShadow={"lg"}
        sx={{ margin: { base: "2rem", md: "auto" } }}
      >
        <Center>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#b9e0f2"
          >
            Continue with your session
          </Heading>
        </Center>

        <Flex
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color="white"
        >
          <Text>
            You have been logged out due to inactivity. Please click continue
            below to log back in.
          </Text>
        </Flex>

        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => handleRefresh()}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
