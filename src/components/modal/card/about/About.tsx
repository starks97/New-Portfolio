"use client"; //Must be Client Components

import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { ImProfile } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import SwiperAbout from "./SwipeAbout";
import { IAboutProps } from "../../interfaces";

export default function About({ activeIndex, description }: IAboutProps) {
  return (
    <>
      {activeIndex === 2 && (
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
              as={ImProfile}
              bg="none"
              color="orange"
              w={5}
              h={5}
              margin={"1rem"}
            />
            <Flex borderBottom="2px solid #666" width="100%" />
          </Flex>
          <Flex w="full" flexDirection={"column"}>
            <Flex justifyItems="center" alignItems="center">
              <Icon as={BsFillPersonFill} w={5} h={5} margin={"1rem"} />
              <Text
                fontFamily={"Lato, sans-serif, serif"}
                fontSize={"1.2rem"}
                textTransform={"uppercase"}
                fontWeight={700}
              >
                Personal Info
              </Text>
            </Flex>
            <Box marginLeft="1rem" lineHeight={"8"}>
              <Text>{description}</Text>
            </Box>
          </Flex>
          <Flex h="100px" w="full">
            <SwiperAbout />
          </Flex>
        </Flex>
      )}
    </>
  );
}
