import Link from "next/link";
import { getUserInfo } from "../Auth.actions";
import { handleLogout } from "./Userbar.actions";

export async function Userbar() {
  const userInfo = await getUserInfo();

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
      </Link>
      <form action={handleLogout}>
        <button type="submit">Sair</button>
      </form>
    </div>
  );
}
