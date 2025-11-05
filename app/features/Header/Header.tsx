import { Logo } from "@/app/_UI/components/shared";
import { Searchbar } from "./components";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
    </header>
  );
}
