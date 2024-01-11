"use client"; //Must be Client Components
import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IAboutSwiperProps } from "../../interfaces";
import SwiperResumeSlide from "./SwiperResume";
import { CustomTextComponent } from "../../../../themes";

export default function SwiperAbout({ ...props }: IAboutSwiperProps) {
  return (
    <>
      <Flex
        w="full"
        h="full"
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
