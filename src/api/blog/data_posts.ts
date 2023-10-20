"use client";

import { baseUrl } from "../../../consts";
import { IBlogPostProps } from "../../components/blog";

export const fetchBlogPosts = async (page: number, limit: number) => {
  if (page < 0) throw new Error("Page must be greater than 0");

  if (limit < 0) throw new Error("Limit must be greater than 0");

  const res = await fetch(
    `${baseUrl}/blog/post?offset=${+page}&limit=${+limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts from server");
  }

  const data = await res.json();

  return data.data.posts as IBlogPostProps[];
};

export const fetchPostBySlug = async (slug: string) => {
  const res = await fetch(`${baseUrl}/blog/post/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await res.json();

  return data.data as IBlogPostProps;
};
