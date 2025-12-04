import { logout } from "@/app/_features/auth/actions";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button>Sair</button>
    </form>
  );
}
