"use client"; //Must be Client Components

import { Text, Icon, Flex } from "@chakra-ui/react";
import React from "react";

interface IProjectInfoProps {
  label: string;
  icon: React.ElementType;
  value?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ProjectInfo({
  label,
  icon,
  value,
  children,
}: IProjectInfoProps) {
  return (
    <Flex
      flexDirection={"row"}
      gap={"0.5rem"}
      alignItems="center"
      marginTop="1rem"
    >
      <Icon as={icon} w={5} h={5} color="#0ea5ea" bg="none" />
      <Text color="#0ea5ea" fontFamily={"Roboto Serif"}>
        {label}{" "}
      </Text>
      {label === "Technologies: " ? (
        <Flex>{children}</Flex>
      ) : (
        <Text fontFamily={"Roboto Serif"}>{value}</Text>
      )}
    </Flex>
  );
}
