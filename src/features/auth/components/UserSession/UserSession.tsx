import Image from "next/image";
import Link from "next/link";
import { auth } from "../../utils";

export default async function UserSession() {
  const session = await auth();

  console.log(session);

  if (!session || !session.user)
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );

  return (
    <div>
      <Image
        src={session.user.avatar}
        alt={`Avatar do usuário ${session.user.nickname}`}
        width={60}
        height={60}
      />
      <p>{session.user.nickname}</p>
      <button>Sair</button>
    </div>
  );
}
