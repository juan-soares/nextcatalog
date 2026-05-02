import { auth } from "./utils/next-auth.util";

export async function isAdmin() {
  const session = await auth();

  return session?.user?.role === "admin";
}

export async function requireAdmin() {
  const ok = await isAdmin();

  if (!ok) {
    throw new Error("Unauthorized");
  }
}
