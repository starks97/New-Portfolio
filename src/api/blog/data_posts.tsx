"use client";

import { useQuery } from "react-query";
import { IBlogPostProps } from "../../components/blog";

export const fetchBlogPosts = async () => {
  const res = await fetch("http://localhost:3000/blog/post");
  const data = await res.json();

  return data.data.posts as IBlogPostProps[];
};

export const useBlogPostsQuery = () => {
  return useQuery("blogPosts", fetchBlogPosts);
};
