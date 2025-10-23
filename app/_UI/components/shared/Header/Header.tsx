import styles from "./Header.module.css";
import { Logo } from "../Logo";
import { Searchbar } from "./Searchbar";

export async function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
    </header>
  );
}
