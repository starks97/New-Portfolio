"use client"; //Must be Client Components

import { PostsCardMobile } from "./posts";

import { Box } from "@chakra-ui/react";
import { PostsCard } from "./posts";
import { useResponsive, ResponsiveBreakpoints } from "@/hooks";

export default function BlogLayout() {
  const isMobile = useResponsive(ResponsiveBreakpoints.XS);
  return (
    <Box bg="#222" maxH="100vh" h="100%" w="100%">
      {isMobile ? (
        <PostsCardMobile
          title="Helpful Tips for Working from Home as a Freelancer"
          images={"/dados.svg"}
          author="David"
          imageAuthor={"/xample.jpg"}
          publishDate="May 31, 2021"
          category={"#Technology"}
        />
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
