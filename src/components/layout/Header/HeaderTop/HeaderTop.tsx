import styles from "./HeaderTop.module.css";
import { Logo } from "@/src/components/ui";
import { Searchbar, Loginbar } from ".";

export function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <Logo />
      <Searchbar />
      <Loginbar />
    </div>
  );
}
