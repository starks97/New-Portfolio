"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  CustomBoxComponent,
  CustomButtonComponent,
  CustomTextComponent,
  GridItemCustom,
  LayoutComponent,
} from "../../../themes";
import SidePosts from "./SidePosts";
import { IBlogProps } from "..";
import React, { useState } from "react";
import { DateConverter } from "@/utils";
import { urlFor } from "../../../../sanity";

export default function PostsCard({ ...props }: IBlogProps) {
  const [loadPosts, setLoadPosts] = useState(3);

  const posts = props.posts.slice(0, loadPosts);

  const handleLoadMore = () => {
    setLoadPosts(loadPosts + 3);
  };

  return (
    <LayoutComponent variant="postCard">
      <GridItemCustom variant="post">
        {posts.map((post) => (
          <React.Fragment key={post._id}>
            <Stack flexDir={"row"}>
              <Link href={`/blog/${post.slug.current}`}>
                <CustomBoxComponent
                  variant="postImage"
                  sx={{
                    width: { base: "180px", md: "200px", lg: "270px" },
                    height: { base: "180px", md: "200px", lg: "250px" },
                    minWidth: { base: "180px", md: "200px", lg: "270px" },
                  }}
                >
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).width(500).url()}
                      alt="postImage"
                      loading="lazy"
                      style={{
                        borderRadius: "0.5rem",
                        width: "100vw",
                        height: "400px",
                        objectFit: "cover",
                      }}
                      width={500}
                      height={300}
                    />
                  )}
                </CustomBoxComponent>
              </Link>

              <Stack dir="column">
                <Box>
                  <Badge
                    borderRadius="0.30rem"
                    color="#4BA9C5"
                    bg="black"
                    fontFamily={"Roboto Mono"}
                  >
                    {`#${post.category}`}
                  </Badge>
                </Box>
                <Box>
                  <Link href={`/blog/${post.slug.current}`}>
                    <Heading
                      color="#b9e0f2"
                      fontWeight="extrabold"
                      fontSize="xl"
                      fontFamily={"Roboto Mono"}
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
                    noOfLines={2}
                    fontFamily={"Roboto Serif"}
                  >
                    {post.description}
                  </Text>
                </Box>
                <Stack mt={3} direction={"row"} spacing={4} alignItems="center">
                  <CustomTextComponent
                    variant="postCardAuthor"
                    color="#66768f"
                    sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
                  >
                    {props.author[0].name}
                  </CustomTextComponent>
                  <Text
                    sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
                    fontFamily={"Roboto Serif"}
                  >
                    {DateConverter.formatDateFromString(post._updatedAt)}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </React.Fragment>
        ))}
        <Flex>
          {loadPosts < props.posts.length && (
            <CustomButtonComponent
              variant="FormButton"
              sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
              onClick={handleLoadMore}
            >
              Load More...
            </CustomButtonComponent>
          )}
        </Flex>
      </GridItemCustom>

      <GridItem display="flex" w="full" mb="4rem">
        <SidePosts posts={props.posts} />
      </GridItem>
    </LayoutComponent>
  );
}
