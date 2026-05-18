"use client";

import { logoutAction } from "../../actions";

export default function LogoutButton() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    const confirmed = window.confirm("Tem certeza que deseja sair?");

    if (!confirmed) {
      e.preventDefault();
    }
  };

  return (
    <form action={logoutAction} onSubmit={handleSubmit}>
      <button type="submit">Sair</button>
    </form>
  );
}
