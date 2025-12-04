"use server";

import { redirect } from "next/navigation";
import { getUserByCredentials } from "./getUserByCredentials";

export async function login(formData: FormData) {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) throw new Error("Usuário ou senha não informado.");

  await getUserByCredentials(email, password);

  redirect("/profile");
}
