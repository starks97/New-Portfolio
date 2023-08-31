"use client";
import Link from "next/link";

import { Box, Heading, Text, Stack, Flex, Avatar } from "@chakra-ui/react";
import { IBlogPostProps } from "..";

interface BlogLayoutProps {
  posts: IBlogPostProps[];
}

export default function SidePosts({ posts }: BlogLayoutProps) {
  return (
    <Box
      w="full"
      boxShadow="2xl"
      rounded="xl"
      overflow="hidden"
      p={6}
      border="1px solid #222f43"
      bg="#131c31"
      h="full"
    >
      <Stack dir="column">
        <Text fontWeight="extrabold" fontSize="xl" color="#0ea5ea">
          Popular Posts
        </Text>
        <Flex borderBottom="3px solid #0ea5ea" width="13%" />
      </Stack>
      {posts?.map((post) => (
        <Stack
          mt={6}
          direction={"row"}
          spacing={4}
          align="center"
          key={post.id}
        >
          <Link href="">
            {post.resources[0]?.url && (
              <Avatar
                src={post.resources[0]?.url!}
                name="postImage"
                size="lg"
              />
            )}
          </Link>

          <Stack direction={"column"} spacing={0} fontSize={"sm"} gap={3}>
            <Link href="">
              <Heading
                color="#b9e0f2"
                textTransform={"uppercase"}
                fontWeight="extrabold"
                sx={{
                  fontSize: { md: "md", lg: "lg" },
                }}
                fontFamily="lato, sans-serif"
                _hover={{ color: "#4BA9C5" }}
              >
                {post.title}
              </Heading>
            </Link>

            <Text>{post.createdAt}</Text>
            <Flex borderBottom="1px solid #66768f" width="80%" mt={4} />
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
