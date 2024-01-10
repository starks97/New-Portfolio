"use client";

import { Post } from "../../components/blog";
import { client } from "../../../sanity";

export const fetchBlogPosts = async (
  page?: number,
  limit?: number
): Promise<Post[]> => {
  try {
    if (page || limit) {
      const skip = (+page!! - 1) * +limit!!;
      const query = `*[_type == 'post'][${skip}...${skip + +limit!! - 1}]`;

      const data = (await client.fetch(query)) as Post[];

      if (!data) throw new Error("No data found");

      return data;
    }

    const query = `*[_type == 'post']`;
    const data = (await client.fetch(query)) as Post[];
    if (!data) throw new Error("No data found");

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post> => {
  try {
    const query = `*[_type == 'post' && slug.current == '${slug}'][0]`;

    const data = (await client.fetch(query)) as Post;

    if (!data) throw new Error("No data found");

    return data;
  } catch (err) {
    console.log(err);
    return {} as Post;
  }
};
