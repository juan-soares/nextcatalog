import styles from "./LoginButton.module.css";
import Link from "next/link";

export function LoginButton() {
  return (
    <Link href="/login" className={styles.loginButton}>
      Entrar
    </Link>
  );
}
