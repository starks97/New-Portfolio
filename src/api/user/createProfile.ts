import { baseUrl } from "../../../consts";
import { IUpdateOrCreateProfileUser } from "../dashboard";

export async function fetchUpdateOrCreateProfileUser({
  ...props
}: IUpdateOrCreateProfileUser) {
  const res = await fetch(`${baseUrl}/user/create_profile/${props.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
    credentials: "include", // this is important for cookies to be sent for the request
  });

  if (!res.ok) {
    throw new Error("Failed to update user profile");
  }
  const data = await res.json();

  return data;
}
