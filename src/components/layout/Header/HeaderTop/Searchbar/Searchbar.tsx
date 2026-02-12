import styles from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

export function Searchbar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Pesquisar..."
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
}
