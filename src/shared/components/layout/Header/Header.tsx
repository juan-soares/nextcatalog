import styles from "./Header.module.css";
import { Logo } from "@/shared/components/ui";
import { GlobalSearch } from "@/features/globalSearch";
import { UserInfo } from "@/features/auth";
import { Navbar } from "@/shared/components/layout";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <UserInfo />
      <Navbar />
    </header>
  );
}
