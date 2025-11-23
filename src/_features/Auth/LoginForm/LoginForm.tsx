import { login } from "./LoginForm.actions";

export async function LoginForm() {
  return (
    <main>
      <h1>Login</h1>
      <form action={login}>
        <label htmlFor="email">Usuário:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Senha:</label>
        <input id="password" name="password" type="password" required />

        <button>Enviar</button>
      </form>
    </main>
  );
}
