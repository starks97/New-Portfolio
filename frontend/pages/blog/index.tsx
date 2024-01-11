import { fetchBlogPosts } from "@/api/blog";
import { BlogLayout, IBlogProps } from "../../src/components/blog";
import { fetchProfile } from "../../src/api/user";
import { CustomSeoComponent } from "@/api/SEO";
import { GetStaticProps } from "next";

export default function Blog({ ...props }: IBlogProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3002";
  return (
    <>
      <CustomSeoComponent
        title={"David Blog"}
        description="welcome to a piece of david"
        image=""
        keywords={["blog", "new", "east hampton"]}
        url={`${baseUrl}/blog`}
        isIndex={true}
      />
      <BlogLayout posts={props.posts} author={props.author} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await fetchBlogPosts();
  const author = await fetchProfile();

  return {
    props: {
      posts,
      author,
    },
  };
};
