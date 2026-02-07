import styles from "./Header.module.css";
import { Logo, SearchBar } from "../../ui";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
    </header>
  );
}
