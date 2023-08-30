import { BlogLayout, IBlogPostProps } from "../../src/components/blog";

export default function Blog({ posts }: { posts: IBlogPostProps[] }) {
  return <BlogLayout posts={posts} />;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/blog/post");

  const data = await res.json();
  const posts = data.data.posts as IBlogPostProps[];

  return {
    props: {
      posts: posts,
    },
  };
}
