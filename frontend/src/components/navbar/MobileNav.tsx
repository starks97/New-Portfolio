"use client";

import { Flex, Button } from "@chakra-ui/react";
import { menuItems } from "./interfaces";
import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
export default function MobileNav() {
  const router = useRouter();
  return (
    <Flex
      flexDirection="column"
      justifyContent={"space-around"}
      h="60%"
      w="100%"
      alignItems={"center"}
    >
      {menuItems.map((item) => (
        <React.Fragment key={item.label}>
          {item.label === "Blog" && router.route === "/blog" ? null : (
            <Link href={item.path}>
              <Button
                variant="none"
                _hover={{ opacity: 0.4 }}
                fontSize="4xl"
                color="#ccd7f5"
                bg="none"
                fontFamily={"Roboto Mono"}
              >
                {item.label}
              </Button>
            </Link>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
}
