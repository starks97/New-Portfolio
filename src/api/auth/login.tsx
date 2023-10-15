"use client";

export async function fetchAuthSignUser(email: string, password: string) {
  const res = await fetch(`http://localhost:3000/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
