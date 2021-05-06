import { getGravatarUrl as reactGetGravatar } from "react-awesome-gravatar";

export function getGravatarUrl(email: string, size = 50): string {
  let targetEmail = email || "";
  if (
    targetEmail === "mrinal.manohar@casperlabs.io" ||
    targetEmail === "mrinal@casperlabs.io"
  ) {
    targetEmail = "senecio666@gmail.com";
  }
  if (
    targetEmail === "cliff.sarkin@casperlabs.io" ||
    targetEmail === "cliff@casperlabs.io"
  ) {
    targetEmail = "jeb.titus.lance@gmail.com";
  }
  return reactGetGravatar(targetEmail, {
    default: "mp",
    size,
  });
}
