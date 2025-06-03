import Link from "next/link";
import { IUserInfo } from "@/app/_lib/interfaces";
import { logout } from "@/app/_lib/actions";

export function UserInfo() {
  const user: IUserInfo | null = null;

  if (!user)
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );

  return (
    <div>
      <Link href="/profile">
        <img src="avatar" alt="Avatar do usuário." />
        <h2>nickname</h2>
      </Link>
      <form action={logout}>
        <button>Sair</button>
      </form>
    </div>
  );
}
