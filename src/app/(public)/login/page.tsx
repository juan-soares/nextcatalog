"use server";

import { LoginForm, redirectIfAuthenticated } from "@/app/features/auth";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <main>
      <h1>Login</h1>

      <LoginForm />
    </main>
  );
}
