import { redirect } from "next/navigation";
import { auth } from "./next-auth.util";

export default async function redirectIfAuthenticated(path = "/admin/media") {
  const session = await auth();

  if (session) {
    redirect(path);
  }
}
