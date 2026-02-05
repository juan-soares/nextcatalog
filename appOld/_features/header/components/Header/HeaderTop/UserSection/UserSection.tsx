import Link from "next/link";
import Image from "next/image";
import styles from "./UserSection.module.css";
import { getUserSection } from "@/app/_features/auth/actions";
import { LogoutButton } from "./LogoutButton";

export async function UserSection() {
  const user = await getUserSection();

  if (!user) {
    return (
      <Link className={styles.button} href="/login">
        Entrar
      </Link>
    );
  }

  const { avatar, nickname } = user;

  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Image
          src={avatar}
          alt={nickname}
          width={32}
          height={32}
          className={styles.avatar}
        />
        <span className={styles.nickname}>{nickname}</span>
        <LogoutButton />
      </div>
    </div>
  );
}
