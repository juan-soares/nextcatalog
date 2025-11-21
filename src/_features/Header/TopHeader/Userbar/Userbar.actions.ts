"use server";

import { deleteCurrentUser } from "@/src/_lib/session/user";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function logout() {
  deleteCurrentUser();
 
}
