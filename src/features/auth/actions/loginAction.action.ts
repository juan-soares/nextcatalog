"use server";

import { redirect } from "next/navigation";
import { signIn } from "../utils";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) {
    throw new Error("Email ou senha inválidos");
  }

  redirect("/admin/media");
}
