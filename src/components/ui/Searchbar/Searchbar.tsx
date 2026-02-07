import styles from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        placeholder="Buscar filmes, séries ou jogos..."
        className={styles.input}
      />
      <button className={styles.button} aria-label="Pesquisar">
        <FaSearch size={18} />
      </button>
    </div>
  );
}
