import { fetchBlogPosts, fetchPostBySlug } from "@/api/blog";
import { GetStaticPaths, GetStaticProps } from "next";

import { PostLayout } from "@/components/blog/blogMain";
import { CustomSeoComponent } from "@/api/SEO";
import { IBlogPostProps } from "@/components/blog";

export default function PostPage({ post }: { post: IBlogPostProps }) {
  const getUrlImage = post.resources.find((item) => {
    if (!item) return null;

    return item;
  });

  return (
    <>
      <CustomSeoComponent
        title={`David Blog | ${post.title}`}
        description={post.description}
        image={getUrlImage?.url!}
        keywords={[post.category.toLowerCase(), "east hampton", "new york"]}
        url="http:localhost:3002/blog"
        isIndex={true}
      />
      <PostLayout />
    </>
  );
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
