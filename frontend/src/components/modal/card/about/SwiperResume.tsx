"use client"; //Must be Client Components

import { Box, Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { IAboutSwiperProps } from "../../interfaces";

import InfoCard from "./InfoCard";
import React from "react";

interface SwiperResumeSlideProps {
  mainTitle: string;
  props: IAboutSwiperProps;
}
export default function SwiperResumeSlide({
  mainTitle,
  props,
}: SwiperResumeSlideProps) {
  return (
    <Box
      w="full"
      rounded="xl"
      p={9}
      border="1px solid #222f43"
      bg="#131c31"
      role="group"
      onClick={() => console.log("teste")}
      h="500px"
      maxH="500px"
    >
      <Stack dir="column" alignItems={"center"} h="full">
        <Stack dir="column" alignItems={"center"}>
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "1.3rem", md: "1.5rem" }}
            color="#0ea5ea"
            fontFamily={"Roboto Mono"}
          >
            {mainTitle}
          </Text>
          <Flex borderBottom="3px solid #0ea5ea" width="100%" />
          {mainTitle !== "Education"
            ? props.dataAbout?.EXPERIENCE.map((item, index) => (
                <React.Fragment key={index}>
                  <InfoCard index={index} item={item}>
                    {props.dataAbout?.EDUCATION
                      ? index < props.dataAbout?.EDUCATION!.length - 1 && (
                          <Flex
                            borderBottom="0.5px solid #b9e0f2"
                            width="25%"
                          />
                        )
                      : null}
                  </InfoCard>
                </React.Fragment>
              ))
            : props.dataAbout?.EDUCATION.map((item, index) => (
                <React.Fragment key={index}>
                  <InfoCard index={index} item={item}>
                    {props.dataAbout?.EXPERIENCE
                      ? index < props.dataAbout?.EXPERIENCE!.length - 1 && (
                          <Flex
                            borderBottom="0.5px solid #b9e0f2"
                            width="25%"
                          />
                        )
                      : null}
                  </InfoCard>
                </React.Fragment>
              ))}
        </Stack>
      </Stack>
    </Box>
  );
}
