import { fetchBlogPosts } from "@/api/blog";
import { BlogLayout, IBlogPostProps } from "../../src/components/blog";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Hydrate } from "react-query";

export default function Blog(dehydratedState: IBlogPostProps[]) {
  return (
    <Hydrate state={dehydratedState}>
      <BlogLayout />
    </Hydrate>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], () => fetchBlogPosts(1, 0));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
