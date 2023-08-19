"use client"; //Must be Client Components

import { PostsCardMobile, PostsCard } from "./posts";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useResponsive, ResponsiveBreakpoints } from "@/hooks";

export default function BlogLayout() {
  const isMobile = useResponsive(ResponsiveBreakpoints.XS);
  return (
    <Box
      bg="#0f172a"
      maxH="100vh"
      h="100%"
      w="100%"
      sx={{
        pl: { base: "1rem", md: "5.5rem" },
        pr: { base: "1rem", md: "5.5rem" },
      }}
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
      {isMobile ? (
        <>
          <PostsCardMobile
            title="Helpful Tips for Working from Home as a Freelancer"
            images={"/dados.svg"}
            author="David"
            imageAuthor={"/xample.jpg"}
            publishDate="May 31, 2021"
            category={"#Technology"}
          />
        </>
      ) : (
        <PostsCard
          images={"/dados.svg"}
          title="Helpful Tips for Working from Home as a Freelancer"
          category="#Technology"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          author="David"
          publishDate="May 31, 2021"
        />
      )}
    </Box>
  );
}
