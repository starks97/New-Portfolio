import React from "react";
import { Icon, Stack, Text } from "@chakra-ui/react";
import { BsCalendarDayFill } from "react-icons/bs";

interface ItemData {
  date: string;
  title: string;
  description: string;
}

interface InfoCardProps {
  item: ItemData;
  index: number;
  children?: React.ReactNode;
}

export default function InfoCard({ item, index, children }: InfoCardProps) {
  return (
    <Stack key={index} w="full">
      <Stack flexDir={"row"} alignItems={"center"}>
        <Icon as={BsCalendarDayFill} color="white" />
        <Text>{item.date}</Text>
      </Stack>

      <Text
        fontWeight="bolder"
        fontFamily={"Roboto Mono"}
        color="#b9e0f2"
        fontSize={{ base: "1rem", md: "1.1rem" }}
      >
        {item.title}
      </Text>
      <Text
        noOfLines={{ base: 1, md: 2 }}
        fontFamily={"Roboto Serif"}
        fontSize="1rem"
      >
        {item.description}
      </Text>
      {children}
    </Stack>
  );
}
