"use client"; //Must be Client Components

import { Text, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface IProjectInfoProps {
  label: string;
  icon: IconType;
  value: React.ReactNode;
}

export default function ProjectInfo({ label, icon, value }: IProjectInfoProps) {
  return (
    <Flex
      flexDirection={"row"}
      gap={"0.5rem"}
      alignItems="center"
      marginTop="1rem"
    >
      <Icon as={icon} w={5} h={5} color="white" bg="none" />
      <Text>{label} </Text>
      <Text>{value}</Text>
    </Flex>
  );
}
