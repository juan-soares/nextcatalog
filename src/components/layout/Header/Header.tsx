import styles from "./Header.module.css";
import { Logo } from "@/components/ui";
import { HeaderSearch } from "@/components/layout";
import { HeaderUserInfo } from "./HeaderUserInfo/HeaderUserInfo";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderSearch />
      <HeaderUserInfo />
    </header>
  );
}
