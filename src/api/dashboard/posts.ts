import { baseUrl } from "../../../consts";
import { ICreatePostProps, IUpdatePostProps } from "./interfaces";

export async function fetchCreatePost({ ...props }: ICreatePostProps) {
  const res = await fetch(`${baseUrl}/blog/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
    credentials: "include", // this is important for cookies to be sent for the request
  });

  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  const data = await res.json();

  return data;
}

export async function fetchUpdatePost({ ...props }: IUpdatePostProps) {
  const res = await fetch(`${baseUrl}/blog/post/${props.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
    credentials: "include", // this is important for cookies to be sent for the request
  });

  if (!res.ok) {
    throw new Error("Failed to update post");
  }
  const data = await res.json();

  return data;
}

export async function fetchDeletePost(id: string) {
  const res = await fetch(`${baseUrl}/blog/post/${id}`, {
    method: "DELETE",
    credentials: "include", // this is important for cookies to be sent for the request
  });
  if (!res.ok) {
    throw new Error("Failed to delete pos");
  }

  const data = await res.json();

  return data;
}
