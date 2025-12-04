import styles from "./Header.module.css";
import { HeaderTop } from "..";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
    </header>
  );
}
