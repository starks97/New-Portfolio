import { baseUrl } from "../../../consts";

export default async function fetchAuthRegisterUser(
  email: string,
  name: string,
  password: string
) {
  const res = await fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
