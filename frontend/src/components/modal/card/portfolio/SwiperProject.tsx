"use client"; //Must be Client Components
import React from "react";

import { Flex, Text, GridItem } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";

import { EffectFlip } from "swiper/modules";

import Image from "next/image";
import { SwiperIPortfolioProps } from "../../interfaces";

export default function SwiperProject({
  image,
  description,
}: SwiperIPortfolioProps) {
  return (
    <GridItem
      sx={{
        width: { base: "100%", md: "100%" },
        height: { base: "100%", md: "100%" },
        maxHeight: { base: "400px", md: "400px" },
        maxWidth: { base: "100vw", md: "100vw", lg: "40vw" },
      }}
      justifyContent="center"
      p={6}
      alignItems="center"
      display="flex"
      maxH="100%"
    >
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <Flex
            w="full"
            h="full"
            maxW="100%"
            alignItems="center"
            sx={{
              filter: { base: "none", md: "transparent" },
              "&:hover": {
                base: "none",
                md: {
                  filter: "brightness(0.7)",
                  "& .read-more": { opacity: 1 },
                },
              },
              transition: { base: "none", md: "filter 0.2s" },
            }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Image
              src={image}
              loading="lazy"
              sizes="100%"
              style={{
                borderRadius: "0.5rem",
                width: "100vw",
                height: "400px",
              }}
              width={500}
              height={300}
              alt="portfolio_image"
            />

            <Text
              className="read-more"
              fontSize="2xl"
              fontWeight="bold"
              textTransform="capitalize"
              opacity={0}
              transition="opacity 0.2s"
              textAlign="center"
              position={"absolute"}
              top={130}
              bottom={0}
              left={0}
              right={0}
              color="#0ba5ea"
            >
              Swipe to read...
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="full"
            h="full"
            alignItems={"center"}
            borderRadius="1rem"
            p="1rem"
            border="1px solid #222f43"
            boxShadow={"0 0 10px #222f43"}
            bg="#131c30"
          >
            <Text lineHeight={"30px"} fontFamily={"Roboto Serif"}>
              {description}
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </GridItem>
  );
}
