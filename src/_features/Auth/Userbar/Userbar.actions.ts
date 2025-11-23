"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function logout() {
  (await cookies()).delete("session");
  revalidatePath("/", "layout");
}

export async function handleLogout(formData: FormData) {
  await logout();
}
