"use client"; //Must be Client Components

import { useState, useMemo } from "react";

import { PostsCardMobile, PostsCard } from "./posts";

import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useResponsive, ResponsiveBreakpoints } from "../../hooks";
import Footer from "./Footer";

import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IBlogPostProps } from ".";

import { useQuery } from "react-query";
import { fetchBlogPosts } from "@/api/blog";

export default function BlogLayout() {
  const isMobile = useResponsive(ResponsiveBreakpoints.XS);
  const [postPage, setPostPage] = useState<number>(1);
  const limit = +5;
  const testPage = postPage * limit;
  const offset = useMemo(() => postPage, [postPage]);

  const { isLoading, data, isFetching, isPreviousData } = useQuery<
    IBlogPostProps[],
    Error
  >(["posts", postPage], () => fetchBlogPosts(offset, 5), {
    keepPreviousData: true,
  });
  if (!data) return null;

  const handleFetchPosts = () => {
    if (testPage > data.length) {
      setPostPage((currentPage) => currentPage - 1);
      return;
    }
    setPostPage((previusPostPage) => previusPostPage + 1);
  };

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
        <PostsCardMobile />
      ) : (
        <PostsCard posts={data}>
          <Button onClick={handleFetchPosts} mt={4}>
            {isFetching ? "Loading..." : "Load More"}
          </Button>
        </PostsCard>
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
        sx={{
          justifyContent: { base: "center", md: "center", lg: "none" },
          m: { base: 4, md: 0, lg: 0, xl: 0 },
        }}
      />
    </Box>
  );
}
