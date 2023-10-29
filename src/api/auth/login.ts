"use client";

import { baseUrl } from "../../../consts";

export async function fetchAuthSignUser(email: string, password: string) {
  const res = await fetch(`${baseUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log("signin", data);

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
