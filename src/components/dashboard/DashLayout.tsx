"use client";
import { Container } from "@chakra-ui/react";
import PostsTable from "./PostsTable";
import { IBlogPostProps } from "../blog";
import { useQueries } from "react-query";
import { fetchUsers } from "@/api/dashboard";
import { fetchBlogPosts } from "@/api/blog";

export default function DashLayout() {
  const Queries = useQueries([
    {
      queryKey: ["posts"],
      queryFn: () => fetchBlogPosts(1, 0),
    },
    {
      queryKey: ["users"],
      queryFn: () => fetchUsers(1, 0),
    },
  ]);

  const posts = Queries[0].data as IBlogPostProps[];
  const users = Queries[1].data as any[];

  return (
    <Container maxW={"100%"}>
      <PostsTable posts={[]} />
    </Container>
  );
}
