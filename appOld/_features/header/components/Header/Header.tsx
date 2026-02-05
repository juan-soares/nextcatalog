import styles from "./Header.module.css";
import { HeaderBottom, HeaderTop } from "..";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
