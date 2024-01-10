import { client } from "../../../sanity";
import { User } from "./interfaces";

export async function fetchProfile() {
  const query = `*[_type == 'user']`;

  const data = (await client.fetch(query)) as User;

  if (!data) throw new Error("No data found");

  return data;
}
