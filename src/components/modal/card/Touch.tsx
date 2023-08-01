"use client";
import { LayoutComponent } from "@/themes";
import { Flex, Icon, GridItem, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { ITouchProps } from "../interfaces";

export default function Touch({
  activeIndex,
  email,
  phone,
  info: { icons, path },
}: ITouchProps) {
  return (
    <>
      {activeIndex === 4 && (
        <Flex flexDirection="column" alignItems="center">
          <Flex
            overflow={"inherit"}
            bg="none"
            margin="35px 0 62px"
            justifyItems="center"
            alignItems="center"
            w="50%"
          >
            <Flex borderBottom="2px solid #666" width="100%" />
            <Icon
              as={MdEmail}
              bg="none"
              color="orange"
              w={5}
              h={5}
              margin={"1rem"}
            />
            <Flex borderBottom="2px solid #666" width="100%" />
          </Flex>
          <LayoutComponent variant="touchLayout">
            <GridItem
              bg="#111"
              width="full"
              h="full"
              display={"flex"}
              gap={"inherit"}
              flexDirection={"column"}
              alignItems={"start"}
              p={"1rem"}
            >
              <Flex flexDirection={"column"}>
                <Text fontWeight={"extrabold"} color="orange">
                  PHONE
                </Text>
                <Text marginTop={"1rem"}>{phone}</Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"extrabold"} color="orange">
                  EMAIL
                </Text>
                <Text marginTop={"1rem"}>{email}</Text>
              </Flex>
              <Box>
                <Text fontWeight={"extrabold"} color="orange">
                  SOCIAL MEDIA
                </Text>
                <Flex flexDirection={"row"} gap={"1rem"} marginTop={"1rem"}>
                  {icons.map((icon, index) => (
                    <Link
                      key={index}
                      href={path[index]}
                      passHref
                      target="_blank"
                    >
                      <Icon
                        as={icon}
                        color="#FFB25C"
                        w={5}
                        h={5}
                        bg="transparent"
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          outline: "none",
                        }}
                        _hover={{
                          opacity: 0.5,
                        }}
                      />
                    </Link>
                  ))}
                </Flex>
              </Box>
            </GridItem>
          </LayoutComponent>
        </Flex>
      )}
    </>
  );
}
