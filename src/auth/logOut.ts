"use server";

import { signOut } from "./next-auth";

export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
