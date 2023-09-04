import { fetchBlogPosts, fetchPostBySlug } from "@/api/blog";
import { Hydrate } from "@/api/query";
import { IBlogPostProps } from "@/components/blog";
import { QueryClient } from "@tanstack/query-core";
import { GetStaticPaths, GetStaticProps } from "next";

import { PostLayout } from "@/components/blog/blogMain";

export default function PostPage() {
  return <PostLayout />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchBlogPosts(1, 0);

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};
