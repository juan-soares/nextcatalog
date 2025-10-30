import styles from "./Header.module.css";
import { Logo } from "../Logo";
import { Searchbar, Loginbar, Navbar, FranchisesCarousel } from "./";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
      <Loginbar />
      <Navbar />
      <FranchisesCarousel />
    </header>
  );
}
