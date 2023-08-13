"use client"; //Must be Client Components

import { Flex } from "@chakra-ui/react";
import React from "react";
import { ImProfile } from "react-icons/im";
import SwiperAbout from "./SwipeAbout";
import { IAboutProps } from "../../interfaces";
import { LayoutComponent, LineSeparator } from "@/themes";
import Profile from "./Profile";

export default function About({ activeIndex, description }: IAboutProps) {
  return (
    <>
      {activeIndex === 2 && (
        <Flex flexDirection="column" alignItems="center">
          <LineSeparator icon={ImProfile} />
          <LayoutComponent variant="aboutCard">
            <Profile description={description} />
          </LayoutComponent>
          <Flex h="100px" w="full">
            <SwiperAbout />
          </Flex>
        </Flex>
      )}
    </>
  );
}
