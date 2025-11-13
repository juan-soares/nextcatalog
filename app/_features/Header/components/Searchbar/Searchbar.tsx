"use client";

import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { ResultsList } from "./components";

export function Searchbar() {
  const { query, setQuery } = useSearch();

  return (
    <div className={styles.searchbar}>
      <input
        placeholder="Pesquisar..."
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      {query && <ResultsList query={query} />}
    </div>
  );
}
