"use client";

import { Stack, Container, GridItem, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DateConverter } from "@/utils";
import { CustomTextComponent, GridItemCustom, LayoutComponent } from "@/themes";
import { SidePosts } from "../posts";
import Footer from "../Footer";

import SubBar from "./SubBar";
import { Post } from "../interfaces";
import { PortableText } from "@portabletext/react";
import { User } from "../../../api/user";
import Menu from "@/components/navbar/Menu";
import { PortableImageRenderComponent } from "../utils/ImageRender";

interface IPostProps {
  post: Post;
  posts: Post[];
  author: User[];
}
export default function PostLayout({ ...props }: IPostProps) {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const shareUrl = `${baseUrl}/blog/${slug}`;

  return (
    <>
      <Box sx={{ px: { base: "1rem", md: "2rem" } }}>
        <Menu />
      </Box>
      <Container
        w="100%"
        sx={{ maxW: { base: "100%", md: "80%", lg: "90%" } }}
        mb="2rem"
        p="1.5rem"
      >
        <Stack w="100%" mt="2rem" mb="3rem" p="none">
          <CustomTextComponent
            variant="postMainTitle"
            sx={{
              fontSize: { base: "3xl", md: "3xl", lg: "4xl" },
            }}
            color="#0ea5ea"
          >
            {props.post.title}
          </CustomTextComponent>
          <Text
            color="#94a9c9"
            sx={{
              fontSize: { base: "large", md: "larger", lg: "xl" },
              width: { base: "100%", md: "75%", lg: "75%", xl: "50%" },
            }}
            fontFamily={"Roboto Serif"}
          >
            {props.post.description}
          </Text>
          <SubBar
            hrefShare={shareUrl}
            creatAt={DateConverter.formatDateFromString(props.post._updatedAt)}
            name={props.author[0].name}
            lastName={props.author[0].lastname}
            image={props.author[0].image}
          />
        </Stack>
        <LayoutComponent variant="postPage">
          <GridItemCustom variant="postPageItem">
            <Box
              sx={{
                fontSize: { base: "large", md: "large", lg: "xl" },
              }}
              lineHeight={"2rem"}
              fontFamily={"Roboto Serif"}
            >
              <PortableText
                value={props.post.content}
                components={PortableImageRenderComponent}
              />
            </Box>
          </GridItemCustom>
          <GridItem w="100%">
            <SidePosts posts={props.posts} />
          </GridItem>
        </LayoutComponent>
      </Container>
      <Box sx={{ px: { base: "1rem", md: "2rem" } }} mb="1rem">
        <Footer posts={props.posts} />
      </Box>
    </>
  );
}
