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
import { IBlogPostProps } from "..";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchBlogPosts } from "@/api/blog";
interface BlogLayoutProps {
  posts: IBlogPostProps[];
  handleFetchPosts: () => void;
}

export default function PostsCardMobile() {
  const { data: postsMobile } = useQuery<IBlogPostProps[], Error>(
    ["posts"],
    () => fetchBlogPosts(1, 0),
    {
      keepPreviousData: true,
    }
  );
  if (!postsMobile) return null;
  return (
    <Center py={6} m={4}>
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
        {postsMobile?.map((post, index) => (
          <SwiperSlide key={post.id}>
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
              onClick={() => console.log("teste")}
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
                {post.resources[0]?.url && (
                  <Image src={post.resources[0].url} alt="postImage" fill />
                )}
              </Box>
              <Flex m={1} mt={2}>
                <Badge borderRadius="0.30rem" color="#4BA9C5" bg="black">
                  {`#${post.category}`}
                </Badge>
              </Flex>
              <Stack marginTop="2rem">
                <Link href="">
                  <Heading
                    color="#b9e0f2"
                    textTransform={"uppercase"}
                    fontWeight="extrabold"
                    fontSize="xl"
                    fontFamily="lato, sans-serif"
                    _groupHover={{ color: "#4BA9C5" }}
                  >
                    {post.title}
                  </Heading>
                </Link>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align="center">
                <Avatar src={post.user.image} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text
                    fontWeight={600}
                    color="#66768f"
                    fontFamily={"Noto Sans,sans-serif"}
                    fontSize={"16px"}
                  >
                    {post.user.name}
                  </Text>
                  <Text>{post.createdAt}</Text>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
}
