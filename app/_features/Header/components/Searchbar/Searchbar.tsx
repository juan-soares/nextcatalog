"use client";

import { ResultsList } from "./components";
import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";

export function Searchbar() {
  const { showResultList } = useSearch();

  return (
    <div className={styles.searchbar}>
      <input placeholder="Pesquisar..." type="search" />
      {showResultList && <ResultsList />}
    </div>
  );
}
