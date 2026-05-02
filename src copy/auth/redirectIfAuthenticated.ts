import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function redirectIfAuthenticated(path = "/admin/media") {
  const session = await auth();

  if (session) {
    redirect(path);
  }
}
