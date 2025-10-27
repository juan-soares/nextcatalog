import Link from "next/link";
import styles from "./Loginbar.module.css";

export function Loginbar() {
  const user = null;

  if (!user) {
    return (
      <div className={styles.loginbar}>
        <Link href="/login">
          <button>Entrar</button>
        </Link>
      </div>
    );
  }

  const { avatar, nickname } = user;

  return (
    <div className={styles.loginbar}>
      <img src={avatar} />
      <span>{nickname}</span>
      <Link href="/novo">
        <button>+</button>
      </Link>
      <button>Sair</button>
    </div>
  );
}
