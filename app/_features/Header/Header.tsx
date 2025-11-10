import styles from "./Header.module.css";
import { Logo } from "@/app/_UI/components";
import { Navbar } from "./components";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
}
