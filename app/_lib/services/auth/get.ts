"use server";

import { redirect } from "next/navigation";
import { getUserByCredentials } from "../user";

export async function login(formData: FormData): Promise<void> {
  try {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) throw new Error("Email ou senha não informados.");

    const credentials = { email, password };

    const userInfo = await getUserByCredentials(credentials);

    if (!userInfo) throw new Error("Usuário ou senha incorretos.");

    redirect("/profile");
  } catch (error) {
    console.log("Ops! Não foi possível fazer o login: " + error);
  }
}
