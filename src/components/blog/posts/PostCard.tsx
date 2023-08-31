"use client";
import { Badge, Box, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  CustomBoxComponent,
  CustomTextComponent,
  GridItemCustom,
  LayoutComponent,
} from "../../../themes";
import SidePosts from "./SidePosts";
import { IBlogPostProps } from "..";
import React from "react";

interface BlogLayoutProps {
  posts: IBlogPostProps[];
}
export default function PostsCard({ posts }: BlogLayoutProps) {
  return (
    <LayoutComponent variant="postCard">
      <GridItemCustom variant="post">
        {posts?.map((post) => (
          <React.Fragment key={post.id}>
            <Stack flexDir={"row"}>
              <Link href="/">
                <CustomBoxComponent
                  variant="postImage"
                  sx={{
                    width: { base: "180px", md: "200px", lg: "270px" },
                    height: { base: "180px", md: "200px", lg: "250px" },
                    minWidth: { base: "180px", md: "200px", lg: "270px" },
                  }}
                >
                  {post.resources[0]?.url && (
                    <Image src={post.resources[0].url} alt="postImage" fill />
                  )}
                </CustomBoxComponent>
              </Link>

              <Stack dir="column">
                <Box>
                  <Badge borderRadius="0.30rem" color="#4BA9C5" bg="black">
                    {`#${post.category}`}
                  </Badge>
                </Box>
                <Box>
                  <Link href="">
                    <Heading
                      color="#b9e0f2"
                      textTransform={"uppercase"}
                      fontWeight="extrabold"
                      fontSize="xl"
                      fontFamily="lato, sans-serif"
                      _hover={{ color: "#4BA9C5" }}
                      sx={{
                        fontSize: { md: "lg", lg: "xl" },
                      }}
                    >
                      {post.title}
                    </Heading>
                  </Link>
                </Box>
                <Box>
                  <Text
                    color="#94a9c9"
                    sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
                  >
                    {post.description}
                  </Text>
                </Box>
                <Stack mt={3} direction={"row"} spacing={4} align="center">
                  <CustomTextComponent
                    variant="postCardAuthor"
                    color="#66768f"
                    sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
                  >
                    {post.user.name}
                  </CustomTextComponent>
                  <Text sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}>
                    {post.createdAt}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </React.Fragment>
        ))}
      </GridItemCustom>

      <GridItem display="flex" w="full" mb="4rem">
        <SidePosts posts={posts} />
      </GridItem>
    </LayoutComponent>
  );
}
