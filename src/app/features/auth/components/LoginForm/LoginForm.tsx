import { loginAction } from "../../actions";

export default function LoginForm() {
  return (
    <form action={loginAction}>
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="senha" />

      <button type="submit">Entrar</button>
    </form>
  );
}
