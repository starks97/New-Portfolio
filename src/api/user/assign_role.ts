import { baseUrl } from "../../../consts";

export async function fetchAssignRole(id: string, roleName: string) {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roleName }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to assign role");
  }

  const data = await res.json();

  return data;
}
