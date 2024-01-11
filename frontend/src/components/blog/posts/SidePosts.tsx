"use client";
import Link from "next/link";

import { Box, Heading, Text, Stack, Flex, Avatar } from "@chakra-ui/react";
import { Post } from "..";
import { DateConverter } from "@/utils";
import { useRouter } from "next/router";
import { urlFor } from "../../../../sanity";

export default function SidePosts({ posts }: { posts: Post[] }) {
  const router = useRouter();

  const filteredPosts = posts.filter(
    (post) => post.slug.current !== router.query.slug
  );

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
        <Text
          fontWeight="extrabold"
          fontSize="xl"
          color="#0ea5ea"
          fontFamily={"Roboto Mono"}
        >
          Popular Posts
        </Text>
        <Flex borderBottom="3px solid #0ea5ea" width="13%" />
      </Stack>

      {filteredPosts?.map((post, index) => (
        <Stack
          mt={6}
          direction={"row"}
          spacing={4}
          align="center"
          key={post._id}
        >
          <Link href={`/blog/${post.slug.current}`}>
            {post.mainImage && (
              <Avatar
                src={urlFor(post.mainImage).size(64, 64).url()}
                name="postImage"
                size="lg"
              />
            )}
          </Link>

          <Stack direction={"column"} spacing={0} fontSize={"sm"} gap={3}>
            <Link href={`/blog/${post.slug.current}`}>
              <Heading
                color="#b9e0f2"
                fontWeight="extrabold"
                sx={{
                  fontSize: { md: "small", lg: "medium" },
                }}
                fontFamily="Roboto Mono"
                _hover={{ color: "#4BA9C5" }}
              >
                {post.title}
              </Heading>
            </Link>

            <Text fontFamily={"Roboto Serif"} fontSize={"medium"}>
              {DateConverter.formatDateFromString(post._updatedAt)}
            </Text>
            {index < filteredPosts.length - 1 && (
              <Flex borderBottom="1px solid #66768f" width="80%" mt={4} />
            )}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
