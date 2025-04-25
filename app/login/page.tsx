import { login } from "../_lib/utils";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <form action={login}>
        <label htmlFor="email">Usuário:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="****"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
