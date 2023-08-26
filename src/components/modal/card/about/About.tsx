"use client"; //Must be Client Components

import { Flex } from "@chakra-ui/react";
import React from "react";
import { ImProfile } from "react-icons/im";
import SwiperAbout from "./SwipeAbout";
import { IAboutProps } from "../../interfaces";
import { CustomTextComponent, LayoutComponent, LineSeparator } from "@/themes";
import Profile from "./Profile";

export default function About({
  activeIndex,
  description,
  dataAbout,
  journey,
}: IAboutProps) {
  return (
    <>
      {activeIndex === 2 && (
        <>
          <Flex flexDirection="column" alignItems="center" id="about">
            <LineSeparator icon={ImProfile} />
            <LayoutComponent variant="aboutCard">
              <Profile description={description} />
            </LayoutComponent>
          </Flex>
          <Flex borderBottom="1px solid #66768f" width="100%" mt={7} />
          <Flex
            justifyContent="center"
            mt="2rem"
            sx={{
              "@media (min-width: 62em)": { display: "none" },
            }}
          >
            <CustomTextComponent variant="portfolioTitle" color="#b9e0f2">
              My Journey
            </CustomTextComponent>
          </Flex>

          <SwiperAbout dataAbout={dataAbout} journey={journey} />
        </>
      )}
    </>
  );
}
