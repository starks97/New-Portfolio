"use client";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Badge,
  Flex,
  Avatar,
} from "@chakra-ui/react";

import { EffectCreative } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import Image from "next/image";
import Link from "next/link";
import { IBlogProps } from "..";

import router from "next/router";
import { DateConverter } from "@/utils";
import { urlFor } from "../../../../sanity";

export default function PostsCardMobile({ ...props }: IBlogProps) {
  return (
    <Center py={6}>
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {props.posts.map((post, index) => (
          <SwiperSlide key={post._id}>
            <Box
              maxW="25rem"
              w="full"
              boxShadow="2xl"
              rounded="xl"
              overflow="hidden"
              p={6}
              border="1px solid #222f43"
              bg="#131c31"
              role="group"
              onClick={() => router.push(`/blog/${post.slug.current}`)}
            >
              <Box
                key={index}
                h="250px"
                mt={-6}
                mx={-6}
                mb={6}
                pos="relative"
                margin={1}
                borderRadius={9}
                overflow={"hidden"}
              >
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt="postImage"
                    sizes="100%"
                    style={{
                      borderRadius: "0.5rem",
                      width: "100vw",
                      height: "400px",
                    }}
                    width={300}
                    height={300}
                  />
                )}
              </Box>
              <Flex m={1} mt={2}>
                <Badge
                  borderRadius="0.30rem"
                  color="#4BA9C5"
                  bg="black"
                  fontFamily={"Roboto Serif"}
                >
                  {`#${post.category}`}
                </Badge>
              </Flex>
              <Stack marginTop="2rem">
                <Link href={`/blog/${post.slug.current}`}>
                  <Heading
                    color="#b9e0f2"
                    textTransform={"uppercase"}
                    fontWeight="extrabold"
                    fontSize="xl"
                    fontFamily="Roboto Mono"
                    _groupHover={{ color: "#4BA9C5" }}
                  >
                    {post.title}
                  </Heading>
                </Link>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align="center">
                <Avatar src={urlFor(props.author[0].image).url()} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text
                    fontWeight={600}
                    color="#66768f"
                    fontFamily={"Roboto Serif"}
                    fontSize={"16px"}
                  >
                    {props.author[0].name}
                  </Text>
                  <Text>
                    {DateConverter.formatDateFromString(post._updatedAt)}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
}
