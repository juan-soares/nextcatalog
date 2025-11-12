"use client";

import styles from "./Searchar.module.css";

export function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input placeholder="Pesquisar..." type="search" />
    </div>
  );
}
