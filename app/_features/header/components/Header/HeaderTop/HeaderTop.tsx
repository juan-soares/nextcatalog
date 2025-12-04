import styles from "./HeaderTop.module.css";
import { Logo } from "@/app/_UI/components";
import { SearchBar, UserSection } from ".";

export function HeaderTop() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.left}>
        <Logo />
      </div>

      <div className={styles.center}>
        <SearchBar />
      </div>

      <div className={styles.right}>
        <UserSection />
      </div>
    </header>
  );
}
