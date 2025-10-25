import styles from "./Header.module.css";
import { Logo } from "../Logo";
import { Searchbar, Loginbar } from "./";

export async function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
      <Loginbar />
    </header>
  );
}
