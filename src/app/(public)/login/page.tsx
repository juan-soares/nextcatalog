import { LoginForm, redirectIfAuthenticated } from "@/features/auth";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <main>
      <h1>Login</h1>

      <LoginForm />
    </main>
  );
}
