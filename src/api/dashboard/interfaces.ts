import { IBlogPostProps, User } from "@/components/blog";

export enum Category {
  "GENERAL",
  "SCIENCE",
  "TECHNOLOGY",
  "SPORTS",
  "POLITICS",
  "ECONOMY",
  "ENTERTAINMENT",
  "HEALTH",
  "EDUCATION",
  "OTHER",
}

export interface ICreatePostProps
  extends Pick<
    IBlogPostProps,
    "title" | "content" | "tags" | "category" | "description"
  > {
  files: File[];
}

export interface IUpdatePostProps extends ICreatePostProps {
  id: string;
}

export type Role = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  permissions: string[];
};

export interface IUserRole extends User {
  role: Role;
}

export interface IUpdateOrCreateProfileUser
  extends Pick<User, "bio" | "birthday" | "lastName" | "name"> {
  file: File;
  id: string;
}
