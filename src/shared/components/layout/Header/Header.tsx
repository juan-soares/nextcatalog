import styles from "./Header.module.css";
import { Logo } from "@/shared/components/ui";
import { GlobalSearch } from "@/features/globalSearch";
import { UserInfo } from "@/features/auth";
import { MediaTypeNav } from "@/features/navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <UserInfo />
      <MediaTypeNav />
    </header>
  );
}
