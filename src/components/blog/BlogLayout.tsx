"use client"; //Must be Client Components

import { PostsCardMobile, PostsCard } from "./posts";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useResponsive, ResponsiveBreakpoints } from "../../hooks";
import Footer from "./Footer";

import { IBlogProps } from ".";
import Menu from "../navbar/Menu";

export default function BlogLayout({ ...props }: IBlogProps) {
  const isMobile = useResponsive(ResponsiveBreakpoints.XS);

  return (
    <>
      <Box sx={{ px: { base: "1rem", md: "2rem" } }}>
        <Menu />
      </Box>
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
            justifyContent: {
              base: "center",
              md: "flex-start",
              lg: "flex-start",
            },
          }}
        >
          <Text
            fontWeight="extrabold"
            fontSize="4xl"
            color="#0ea5ea"
            mt={10}
            fontFamily={"Roboto Mono"}
          >
            Recent Posts
          </Text>
        </Flex>

        {isMobile ? (
          <PostsCardMobile posts={props.posts} author={props.author} />
        ) : (
          <PostsCard posts={props.posts} author={props.author} />
        )}
      </Box>
      <Box mb="1rem" sx={{ px: { base: "1rem", md: "2rem" } }}>
        <Footer posts={props.posts} />
      </Box>
    </>
  );
}
