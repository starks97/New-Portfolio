"use client";

import { Center, Heading } from "@chakra-ui/react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
export default function RefreshForm() {
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

        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color="white"
        >
          {""}
        </Center>

        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
