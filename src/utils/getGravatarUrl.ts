import { getGravatarUrl as reactGetGravatar } from "react-awesome-gravatar";

export function getGravatarUrl(email: string, size = 50): string {
  if (
    email === "mrinal.manohar@casperlabs.io" ||
    email === "mrinal@casperlabs.io"
  ) {
    return "https://www.gravatar.com/avatar/1cb3d95eeec0743f408536328f804901?default=mp&size=50";
  }
  if (
    email === "cliff.sarkin@casperlabs.io" ||
    email === "cliff@casperlabs.io"
  ) {
    return "https://www.gravatar.com/avatar/f83b1e2ae4b1f08c723020066202ad32?default=mp&size=50";
  }
  return reactGetGravatar(email || "", {
    default: "mp",
    size,
  });
}
