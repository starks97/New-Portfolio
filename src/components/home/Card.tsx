"use client"; //Must be Client Components
import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
}

export default function Card({ title }: IProps) {
  return (
    <>
      <Flex
        h="full"
        w="full"
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        as="button"
      >
        <Text>{title}</Text>
      </Flex>
    </>
  );
}
