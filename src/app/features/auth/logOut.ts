"use server";

import { signOut } from "./utils/next-auth.util";

export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
