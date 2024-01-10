"use client";

import { Flex, Text, Button, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IProps {
  value: string;
  icon: React.ElementType;
  href: string;
  label?: string;
}

export default function TouchInfoLabel({ ...props }: IProps) {
  return (
    <Box>
      <Text fontWeight={"extrabold"} color="#0ea5ea" fontFamily={"Roboto Mono"}>
        {props.label}
      </Text>
      <Flex
        alignItems="center"
        gap="0.7rem"
        marginTop="1rem"
        _active={{
          bg: "transparent",
        }}
        _focus={{
          outline: "none",
        }}
        _hover={{
          opacity: 0.5,
        }}
      >
        <Icon as={props.icon} color="#b9e0f2" w={5} h={5} />
        <a href={props.href}>
          <Text fontFamily={"Roboto Serif"}>{props.value}</Text>
        </a>
      </Flex>
    </Box>
  );
}
