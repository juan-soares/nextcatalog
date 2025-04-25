import { getUserByCredentials } from "@/app/_lib/db/collections";
import Link from "next/link";

export async function UserInfo() {
  const user = await getUserByCredentials({ email: "a@a", password: "a" });

  if (!user)
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );

  return (
    <div>
      <Link href="/profile">
        <img src={user.avatar} alt={`Avatar do usuário ${user.nickname}.`} />
        <h2>{user.nickname}</h2>
      </Link>
      <button>Sair</button>
    </div>
  );
}
