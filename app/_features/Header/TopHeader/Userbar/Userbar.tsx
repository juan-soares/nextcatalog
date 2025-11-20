import Link from "next/link";
import { useLogin } from "./Userbar.hooks";

export function Userbar() {
  const { userInfo } = useLogin();

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
        <button>Sair</button>
      </Link>
    </div>
  );
}
