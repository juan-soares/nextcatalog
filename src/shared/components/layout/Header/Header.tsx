import styles from "./Header.module.css";
import { NavLink } from "@/shared/types";
import { Logo } from "@/shared/components/ui";
import { GlobalSearch } from "@/features";
import { Navbar } from "@/shared/components/layout";

interface Props {
  navLinks: NavLink[];
}

export default function Header({ navLinks }: Props) {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <Navbar links={navLinks} />
    </header>
  );
}
