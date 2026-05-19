import Image from "next/image";
import Link from "next/link";
import { auth } from "../../utils";
import { LogoutButton } from "../LogoutButton";

export default async function UserSession() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );
  }

  const { avatar, nickname } = session.user;
  const defaultAvatar = "/assets/avatars/default.png";

  return (
    <div>
      <Link href="/admin/medias">
        <Image
          src={avatar || defaultAvatar}
          alt={`Avatar do usuário ${nickname}.`}
          width={60}
          height={60}
        />

        <p>{nickname}</p>
      </Link>

      <LogoutButton />
    </div>
  );
}
