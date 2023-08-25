"use client"; //Must be Client Components
import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IAboutSwiperProps } from "../../interfaces";
import SwiperResumeSlide from "./SwiperResume";

export default function SwiperAbout({ ...props }: IAboutSwiperProps) {
  return (
    <Flex
      w="full"
      mt="5rem"
      h="full"
      sx={{
        maxW: { base: "full", md: "50%" },
        ml: { base: "none", md: "20rem", lg: "30rem", xl: "30rem" },
      }}
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
      >
        <SwiperSlide>
          <SwiperResumeSlide mainTitle="Education" props={props} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperResumeSlide mainTitle="Experience" props={props} />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
