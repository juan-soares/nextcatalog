"use client";

import { useActionState } from "react";
import { loginAction } from "../../actions";

const initialState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="senha" />

      {state?.error && <p>{state.error}</p>}

      <button type="submit"> {pending ? "Entrando..." : "Entrar"}</button>
    </form>
  );
}
