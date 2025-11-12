import styles from "./Header.module.css";
import { Logo } from "@/app/_UI/components";
import { Navbar, Searchbar } from "./components";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Logo />
        <Searchbar />
      </div>
      <Navbar />
    </header>
  );
}
