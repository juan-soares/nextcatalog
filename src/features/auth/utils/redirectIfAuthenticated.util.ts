import { redirect } from "next/navigation";
import { auth } from "./next-auth.util";

export async function redirectIfAuthenticated(path = "/admin/media") {
  const session = await auth();

  if (session?.user) {
    redirect(path);
  }
}
