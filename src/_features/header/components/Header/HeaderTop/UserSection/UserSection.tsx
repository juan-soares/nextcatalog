"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./UserSection.module.css";

export function UserSection() {
  const user = null;

  if (!user) {
    return (
      <Link href="/login" className={styles.loginButton}>
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
      </div>

      <form action="/api/logout" method="POST">
        <button className={styles.logout}>Sair</button>
      </form>
    </div>
  );
}
