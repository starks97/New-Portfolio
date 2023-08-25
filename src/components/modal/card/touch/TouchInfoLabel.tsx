"use client";

import { Flex, Text, Button, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface IProps {
  value: string;
  icon: IconType;
  href: string;
  label?: string;
}

export default function TouchInfoLabel({ ...props }: IProps) {
  return (
    <Box>
      <Text fontWeight={"extrabold"} color="#0ea5ea">
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
          <Text>{props.value}</Text>
        </a>
      </Flex>
    </Box>
  );
}
