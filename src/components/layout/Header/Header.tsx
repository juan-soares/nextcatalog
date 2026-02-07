import styles from "./Header.module.css";
import { Logo } from "../../ui";
import { Searchbar } from "./Searchbar";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
    </header>
  );
}
