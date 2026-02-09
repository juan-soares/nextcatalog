import styles from "./Header.module.css";
import { HeaderTop, HeaderNav } from ".";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderNav />
    </header>
  );
}
