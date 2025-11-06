import styles from "./Header.module.css";
import { Logo } from "@/app/_UI/components";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
