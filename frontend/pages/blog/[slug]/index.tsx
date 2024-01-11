import { CustomSeoComponent } from "@/api/SEO";
import { fetchBlogPosts, fetchPostBySlug } from "@/api/blog";
import { Post } from "@/components/blog";
import { PostLayout } from "@/components/blog/blogMain";
import { GetStaticPaths, GetStaticProps } from "next";
import { urlFor } from "../../../sanity";
import { User, fetchProfile } from "../../../src/api/user";

export default function PostPage({
  post,
  posts,
  author,
}: {
  post: Post;
  posts: Post[];
  author: User[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3002";
  return (
    <>
      <CustomSeoComponent
        title={`David Blog | ${post.title}`}
        description={post.description}
        image={urlFor(post.mainImage).url()}
        keywords={[post.category[0], "east hampton", "new york"]}
        url={`${baseUrl}/blog/${post.slug.current}`}
        isIndex={true}
      />
      <PostLayout post={post} posts={posts} author={author} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchBlogPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const post = await fetchPostBySlug(slug);

  const posts = await fetchBlogPosts();

  const author = await fetchProfile();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, posts, author },
  };
};
