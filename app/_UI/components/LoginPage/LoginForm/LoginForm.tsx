import { login } from "@/app/_lib/services/auth";

export async function LoginForm() {
  return (
    <form action={login}>
      <label htmlFor="email">Usuário:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="E-mail"
        required
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="****"
        required
      />

      <button>Enviar</button>
    </form>
  );
}
