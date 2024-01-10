import { User } from "@/api/user";

export interface AuthorReference {
  _ref: string;
  _type: "reference";
}

export interface Image {
  type: "image";
  alt: string;
}

export interface Block {
  type: "block";
}

export interface PostContent extends Array<Block | Image> {}

interface AssetReference {
  _type: "reference";
  _ref: string;
}

export interface MainImage {
  caption: string;
  asset: AssetReference;
  _type: "image";
}

export interface Post {
  slug: { current: string };
  tags: string[];
  author: AuthorReference;
  _createdAt: string;
  category: string[];
  title: string;
  description: string;
  _updatedAt: string;
  _rev: string;
  _type: "post";
  _id: string;
  content: any;
  mainImage: MainImage;
}

export interface IBlogProps {
  posts: Post[];
  author: User[];
  children?: React.ReactNode;
}

export interface ISidePostProps extends Pick<IBlogProps, "author"> {
  post: Post;
}
