import { SearchBar } from "../Searchbar";
import styles from "./HeaderTop.module.css";
import { Logo } from "@/src/_UI/components";

export function HeaderTop() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.left}>
        <Logo />
      </div>

      <div className={styles.center}>
        <SearchBar />
      </div>

      <div className={styles.right}></div>
    </header>
  );
}
