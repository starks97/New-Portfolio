"use client"; //Must be Client Components

import { Box, GridItem, Text } from "@chakra-ui/react";

import { ICardProps } from "../interfaces";

export default function HomeCard({
  bg,
  cursor,
  children,
  onClick,
}: ICardProps) {
  return (
    <>
      <GridItem
        bg={bg}
        w="full"
        h="full"
        cursor={cursor}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={onClick}
      >
        <Text
          fontFamily={"Lato, sans-serif, serif"}
          fontSize={"30px"}
          textTransform={"uppercase"}
          fontWeight={900}
          color="orange"
        >
          {children}
        </Text>
      </GridItem>
    </>
  );
}
