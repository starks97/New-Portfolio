import { baseUrl } from "../../../consts";
import { getAccessToken } from "@/store";
import { User } from "../auth/interfaces";

export async function fetchProfile() {
  const authorization = getAccessToken();
  const res = await fetch(`${baseUrl}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authorization}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data as User;
}
