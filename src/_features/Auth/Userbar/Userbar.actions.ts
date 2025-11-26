"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  (await cookies()).delete("session");
  revalidatePath("/", "layout");
  redirect("/");
}

export async function handleLogout(formData: FormData) {
  await logout();
}
