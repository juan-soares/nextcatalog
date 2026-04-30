"use server";

import { signIn } from "@/auth/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    redirect("/admin/media");
  } catch (error) {
    throw new Error("Login inválido");
  }
}

export default function LoginPage() {
  await redirectIfAuthenticated();
  
  return (
    <main>
      <h1>Login</h1>

      <form action={loginAction}>
        <input name="email" placeholder="email" />
        <input name="password" type="password" placeholder="senha" />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
