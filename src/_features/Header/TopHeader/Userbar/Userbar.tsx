import Link from "next/link";
import { IUserInfo } from "./Userbar.types";
import { getCurrentUser } from "@/src/_lib/session/user";
import { logout } from "./Userbar.actions";

export async function Userbar() {
  const userInfo: IUserInfo | null = await getCurrentUser();

  if (!userInfo)
    return (
      <Link href="/login">
        <button>Entrar</button>
      </Link>
    );

  const { nickname, avatar } = userInfo;

  return (
    <div>
      <Link href="/profile">
        <img src={avatar} alt={`Avatar do usuário ${nickname}.`} />
        <span>{nickname}</span>
        <form action={logout}>
          <button type="submit">Sair</button>
        </form>
      </Link>
    </div>
  );
}
