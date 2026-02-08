import styles from "./Header.module.css";
import { Logo } from "../../ui";
import { Loginbar, Searchbar } from ".";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
      <Loginbar />
    </header>
  );
}
