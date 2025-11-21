"use server";

import { deleteCurrentUser } from "@/src/_lib/session/user";
export async function logout() {
  deleteCurrentUser();
}
