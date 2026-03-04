import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderUserInfo.module.css";

export function HeaderUserInfo() {
  const hasUserInfo = false;

  return (
    <div className={styles.headerUserInfo}>
      {hasUserInfo ? (
        <div>
          <Link href="/login">
            <button>Entrar</button>
          </Link>
        </div>
      ) : (
        <div>
          <Image src="avatar.png" alt="Avatar do usuário." />
          <label>Nickname</label>
          <button>Sair</button>
        </div>
      )}
    </div>
  );
}
