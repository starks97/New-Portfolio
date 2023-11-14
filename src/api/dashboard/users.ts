import { ACCESS_TOKEN } from "./../../../consts";
import { baseUrl } from "../../../consts";
import { IUserRole } from "./interfaces";
import Cookies from "js-cookie";
import { getAccessToken } from "@/store";

export async function fetchUsers(page: number, limit: number) {
  //const authorization = Cookies.get(ACCESS_TOKEN);
  const authorization = getAccessToken();
  if (page < 0) throw new Error("Page must be greater than 0");

  if (limit < 0) throw new Error("Limit must be greater than 0");

  const res = await fetch(`${baseUrl}/user?offset=${+page}&limit=${+limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authorization}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users from server");
  }

  const data = await res.json();

  return data.data as IUserRole[];
}

export async function fetchUser(id: string) {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: "GET",
    credentials: "include", // this is important for cookies to be sent for the request
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user from server");
  }

  const data = await res.json();

  return data.data as IUserRole;
}
