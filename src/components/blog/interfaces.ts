import { SystemStyleObject } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface IBlogPostProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  category: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
  resources: Resources[];
  user: User;
}

export type Resources = {
  id: string;
  url: string;
  resource_type: string;
  createdAt: string;
  updatedAt: string;
  postId: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  bio: string;
  image: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
  roleName: string;
};

export interface IFooterProps {
  phone: string;
  email: string;
  info: {
    icons: IconType[];
    path: string[];
  };
  sx?: SystemStyleObject | undefined;
}
