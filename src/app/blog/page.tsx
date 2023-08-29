import { BlogLayout, IBlogPostProps } from "@/components/blog";

export default async function Blog({ posts }: { posts: IBlogPostProps[] }) {
  const res = await fetch("http://localhost:3000/blog/post");

  const data = await res.json();
  const post = data.data.posts as IBlogPostProps[];

  return <BlogLayout posts={post} />;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/blog/post");

  const data = await res.json();
  const posts = data.data.posts as IBlogPostProps[];

  console.log(posts);

  return {
    props: {
      posts: posts,
    },
  };
}
