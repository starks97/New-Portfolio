"use client"; //Must be Client Components
import { Box, Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IAboutSwiperProps } from "../../interfaces";
import SwiperResumeSlide from "./SwiperResume";
import { CustomTextComponent } from "../../../../themes";
import React from "react";

export default function SwiperAbout({ ...props }: IAboutSwiperProps) {
  return (
    <>
      <Flex
        sx={{
          maxW: { base: "full", md: "100%" },
          mt: { base: "1rem", md: "5rem" },
        }}
        flexDir={"row"}
        gap="5rem"
        alignItems="center"
        pl="1rem"
        pr="1rem"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <SwiperResumeSlide mainTitle="Education" props={props} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperResumeSlide mainTitle="Experience" props={props} />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              rounded="xl"
              p={9}
              border="1px solid #222f43"
              bg="#131c31"
              role="group"
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
                    {"Skills"}
                  </Text>
                  <Flex borderBottom="3px solid #0ea5ea" width="100%" />
                  <Grid
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    templateRows={{ base: "repeat(4, 1fr)", md: "1fr" }}
                    gap={10}
                    justifyItems="center"
                    mt="2rem"
                  >
                    {props.dataAbout?.SKILLS.map((item, index) => (
                      <React.Fragment key={index}>
                        <Button
                          leftIcon={
                            <Icon
                              as={item.icon}
                              sx={{
                                width: { base: "20px", md: "30px" },
                                height: { base: "20px", md: "30px" },
                              }}
                            />
                          }
                          key={index}
                          color="#b9e0f2"
                          variant={"none"}
                          bg="none"
                          flexDirection={"column"}
                          cursor={"default"}
                        >
                          {item.title}
                        </Button>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Flex
          h="full"
          flexDir={"column"}
          w="full"
          gap={7}
          alignItems={"center"}
          sx={{
            "@media (max-width: 62em)": { display: "none" },
          }}
        >
          <CustomTextComponent variant="portfolioTitle" color="#b9e0f2">
            My Journey
          </CustomTextComponent>
          <Text
            fontFamily={"Roboto Serif"}
            fontSize={{ base: "1rem", md: "1.1rem" }}
          >
            {props.journey}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
