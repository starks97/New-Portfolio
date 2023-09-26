"use client";

import { Text, Stack, Container, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchPostBySlug } from "@/api/blog";
import { useRouter } from "next/router";
import { DateConverter } from "@/utils";
import { CustomTextComponent, GridItemCustom, LayoutComponent } from "@/themes";
import { SidePosts } from "../posts";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Footer from "../Footer";

import SubBar from "./SubBar";

export default function PostLayout() {
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  const { data, isLoading } = useQuery(
    ["post", slug],
    () => fetchPostBySlug(slug),
    {
      enabled: !!slug,
    }
  );

  if (!data) return null;

  return (
    <Container w="100%" sx={{ maxW: { base: "100%", md: "80%" } }} mb="2rem">
      <Stack w="100%" mt="2rem" mb="3rem" gap="2rem" p="0.5rem">
        <CustomTextComponent
          variant="postMainTitle"
          sx={{
            fontSize: { base: "3xl", md: "3xl", lg: "4xl" },
          }}
          color="#0ea5ea"
        >
          {data.title}
        </CustomTextComponent>
        <SubBar
          hrefShare={`http:${location.hostname}${router.asPath}`}
          creatAt={DateConverter.formatDateFromString(data.createdAt)}
          name={data.user.name}
          lastName={data.user.lastName}
          image={data.user.image}
        />
      </Stack>
      <LayoutComponent variant="postPage">
        <GridItemCustom variant="postPageItem">
          <Text fontSize={"xl"}>{data.content}</Text>
        </GridItemCustom>
        <GridItem>
          <SidePosts />
        </GridItem>
      </LayoutComponent>
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
    </Container>
  );
}
