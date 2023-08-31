"use client"; //Must be Client Components

import { PostsCardMobile, PostsCard } from "./posts";

import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useResponsive, ResponsiveBreakpoints } from "../../hooks";
import Footer from "./Footer";

import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IBlogPostProps } from ".";

import { useQuery } from "react-query";
import { fetchBlogPosts } from "@/api/blog";

export default function BlogLayout() {
  const { data, isLoading } = useQuery<IBlogPostProps[]>({
    queryKey: ["posts"],
    queryFn: fetchBlogPosts,
  });

  if (!data) return null;

  const isMobile = useResponsive(ResponsiveBreakpoints.XS);

  return (
    <Box
      w="100%"
      maxH="100%"
      sx={{
        pl: { base: "1rem", md: "5.5rem" },
        pr: { base: "1rem", md: "5.5rem" },
      }}
      mb={7}
    >
      <Flex
        sx={{
          justifyContent: { base: "center", md: "flex-start" },
        }}
      >
        <Text fontWeight="extrabold" fontSize="4xl" color="#0ea5ea" mt={10}>
          Recent Posts
        </Text>
      </Flex>

      {isLoading ? (
        <Spinner size="xl" mt={4} />
      ) : isMobile ? (
        <PostsCardMobile posts={data} />
      ) : (
        <PostsCard posts={data} />
      )}

      <Footer
        phone="631-903-3732"
        email="ifrit68@hotmail.com"
        info={{
          icons: [BsInstagram, BsGithub, BsLinkedin],
          path: [
            "https://www.instagram.com/",
            "https://github.com/starks97",
            "https://www.linkedin.com/in/david-espinoza-a306b2242/",
          ],
        }}
      />
    </Box>
  );
}
