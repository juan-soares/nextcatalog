import styles from "./Header.module.css";
import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/features/globalSearch/components";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
    </header>
  );
}
