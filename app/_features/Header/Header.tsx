import styles from "./Header.module.css";
import { BottomHeader, TopHeader } from "./";

export function Header() {
  return (
    <header className={styles.header}>
      <TopHeader />
      <BottomHeader />
    </header>
  );
}
