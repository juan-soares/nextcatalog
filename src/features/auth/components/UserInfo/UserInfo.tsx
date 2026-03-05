import styles from "./UserInfo.module.css";
import Link from "next/link";
import Image from "next/image";
import { UserSession } from "@/features/auth/types";

export function UserInfo() {
  const userSession: UserSession | null = null;

  if (!userSession)
    return (
      <div className={styles.userInfo}>
        <Link href="/login">
          <button>Entrar</button>
        </Link>
      </div>
    );

  return (
    <div className={styles.userInfo}>
      <Image src="/avatar.png" alt="Avatar do usuário." />
      <label>Nickname</label>
      <button>Sair</button>
    </div>
  );
}
