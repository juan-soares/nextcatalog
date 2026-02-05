import { login } from "../../actions";

export async function LoginForm() {
  return (
    <form action={login}>
      <label htmlFor="email">Usuário: </label>
      <input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
      />
      <label htmlFor="password">Senha: </label>
      <input
        type="password"
        placeholder="Senha"
        id="password"
        name="password"
        required
      />
      <button>Enviar</button>
    </form>
  );
}
