import { getGravatarUrl as reactGetGravatar } from "react-awesome-gravatar";

export function getGravatarUrl(email: string, size = 50): string {
  let targetEmail = email || "";
  if (targetEmail === "mrinal.manohar@casperlabs.io") {
    targetEmail = "senecio666@gmail.com";
  }
  return reactGetGravatar(email, {
    default: "mp",
    size,
  });
}
