import styles from "./Header.module.css";
import { Logo } from "../../ui";
import { Loginbar, Navbar, Searchbar } from ".";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.center}>
          <Searchbar />
        </div>
        <div className={styles.right}>
          <Loginbar />
        </div>
      </div>

      <div className={styles.bottom}>
        <Navbar />
      </div>
    </header>
  );
}
