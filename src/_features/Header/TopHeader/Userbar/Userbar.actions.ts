"use server";

import { deleteCurrentUser } from "@/src/_lib/session/user";
import { redirect } from "next/navigation";
export async function logout() {
  deleteCurrentUser();
  redirect("/");
}
