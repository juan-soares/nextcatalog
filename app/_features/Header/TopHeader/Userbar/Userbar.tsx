import Link from "next/link";
import { currentUser, logout } from "@/app/_lib/utils/cookiesUser";
import { IUserInfo } from "./Userbar.types";

export async function Userbar() {
  const userInfo: IUserInfo | null = await currentUser();

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
          <button>Sair</button>
        </form>
      </Link>
    </div>
  );
}
