import styles from "./UserInfo.module.css";
import Image from "next/image";

export function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Image
        src="/images/avatar-placeholder.png"
        alt="Avatar do usuário."
        width={40}
        height={40}
        className={styles.avatar}
      />

      <span className={styles.userName}>Nickname</span>

      <button className={styles.logoutButton}>Sair</button>
    </div>
  );
}
