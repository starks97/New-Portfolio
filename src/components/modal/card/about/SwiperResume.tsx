"use client"; //Must be Client Components

import { Box, Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { IAboutSwiperProps } from "../../interfaces";

import { BsCalendarDayFill } from "react-icons/bs";

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
      h="full"
    >
      <Stack dir="column" alignItems={"center"}>
        <Stack dir="column" alignItems={"center"}>
          <Text fontWeight="extrabold" fontSize="xl" color="#0ea5ea">
            {mainTitle}
          </Text>
          <Flex borderBottom="3px solid #0ea5ea" width="100%" />
          {mainTitle !== "Education"
            ? props.dataAbout?.EXPERIENCE.map((item, index) => (
                <Stack key={index}>
                  <Stack flexDir={"row"} alignItems={"center"}>
                    <Icon as={BsCalendarDayFill} color="white" />
                    <Text>{item.date}</Text>
                  </Stack>

                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                  {props.dataAbout?.EXPERIENCE
                    ? index < props.dataAbout?.EXPERIENCE!.length - 1 && (
                        <Flex borderBottom="0.5px solid #b9e0f2" width="25%" />
                      )
                    : null}
                </Stack>
              ))
            : props.dataAbout?.EDUCATION.map((item, index) => (
                <Stack key={index}>
                  <Text>{item.date}</Text>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                  {props.dataAbout?.EXPERIENCE
                    ? index < props.dataAbout?.EXPERIENCE!.length - 1 && (
                        <Flex borderBottom="0.5px solid #b9e0f2" width="25%" />
                      )
                    : null}
                </Stack>
              ))}
        </Stack>
      </Stack>
    </Box>
  );
}
