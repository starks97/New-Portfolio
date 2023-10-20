import { getAccessToken, getRefreshToken } from "@/store";
import { REFRESH_TOKEN, baseUrl } from "../../../consts";
import { RefreshStatus } from "./interfaces";
import Cookies from "js-cookie";

export async function fetchRefeshToken() {
  const refresh_token = getAccessToken();

  console.log("from endpooint", refresh_token);

  const res = await fetch(`${baseUrl}/auth/refresh_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token }),
    credentials: "include", // this is important for cookies to be sent for the request
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data as RefreshStatus;
}
