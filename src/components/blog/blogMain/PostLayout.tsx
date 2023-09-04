"use client";

import { Text, Stack, Container, Avatar } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchPostBySlug } from "@/api/blog";
import { useRouter } from "next/router";
import { DateConverter } from "@/utils";

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
    <Container w="100%" maxW="60%">
      <Stack w="100%" mt="2rem" mb="3rem" gap="2rem">
        <Text
          mt={5}
          textTransform={"uppercase"}
          fontWeight="extrabold"
          color="#0ea5ea"
          fontFamily="lato, sans-serif"
          _hover={{ color: "#4BA9C5" }}
          sx={{
            fontSize: { sm: "sm", md: "3xl", lg: "4xl" },
          }}
          w="full"
        >
          {data.title}
        </Text>
        <Stack direction="row" gap="2rem" alignItems={"center"}>
          <Avatar src={data.user.image} name="postImage" size="md" />
          <Stack direction={"column"} alignItems={"flex-start"} gap={-1}>
            <Text>
              {data.user.name} {""} {data.user.lastName}
            </Text>
            <Text>{DateConverter.formatDateFromString(data.createdAt)}</Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Text>{data.content}</Text>
      </Stack>
    </Container>
  );
}
