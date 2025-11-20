import styles from "./Logo.module.css";
import Link from "next/link";

export function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <img src="/img/icons/logo.png" alt="Logotipo do site." />
    </Link>
  );
}
