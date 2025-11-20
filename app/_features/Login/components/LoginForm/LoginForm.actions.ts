"use server";

import { redirect } from "next/navigation";
import { useAuth } from "./LoginForm.hooks";

export async function postCredentials(formData: FormData) {
  const { authUser } = useAuth();
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const userInfo = await authUser(email, password);

  if (!userInfo) {
    console.error("Credenciais inválidas.");
    return null;
  }

  redirect("/profile");
}
