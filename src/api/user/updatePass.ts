import { baseUrl } from "../../../consts";

export async function fecthUpdateUserPass(id: string, password: string) {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to update user password");
  }

  const data = await res.json();

  return data;
}
