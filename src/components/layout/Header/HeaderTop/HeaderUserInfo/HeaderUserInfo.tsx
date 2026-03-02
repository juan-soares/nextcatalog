import Image from "next/image";
import styles from "./HeaderUserInfo.module.css";

export function HeaderUserInfo() {
  return (
    <div className={styles.headerUserInfo}>
      <button>Entrar</button>

      <Image />
      <span>Title</span>
      <button>Sair</button>
    </div>
  );
}
