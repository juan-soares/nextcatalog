import styles from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

export function Searchbar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Pesquisar..." className={styles.input} />
      <button className={styles.iconButton}>
        <FaSearch />
      </button>
    </div>
  );
}
