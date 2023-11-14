"use client";
import { Container } from "@chakra-ui/react";
import PostsTable from "./PostsTable";
import { IBlogPostProps } from "../blog";
import { useQuery } from "react-query";
import { fetchBlogPosts } from "@/api/blog";

export default function DashLayout() {
  const { data, isLoading, isError } = useQuery<IBlogPostProps[], Error>(
    "posts",
    () => fetchBlogPosts(0, 10),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (!data) return null;

  return (
    <Container maxW={"100%"}>
      <PostsTable posts={data} />
    </Container>
  );
}
