import { getRefreshToken } from "@/store";
import { baseUrl } from "../../../consts";

export async function fetchRefeshToken() {
  const refresh_token = getRefreshToken();

  const res = await fetch(`${baseUrl}/auth/refresh_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ refresh_token }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
}
