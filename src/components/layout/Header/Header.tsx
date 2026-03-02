import styles from "./Header.module.css";
import { HeaderTop, HeaderBottom } from "./";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
