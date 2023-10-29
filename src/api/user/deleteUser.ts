import { baseUrl } from "../../../consts";

export async function fetchDeleteUser(id: string) {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: "DELETE",
    credentials: "include", // this is important for cookies to be sent for the request
  });

  if (!res.ok) {
    throw new Error("Failed to delete user from server");
  }
  const data = await res.json();

  return data;
}
