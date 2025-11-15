"use client";

import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { Input, ResultList } from "./components";

export function Searchbar() {
  const { query, handleChange, loading, results } = useSearch();

  return (
    <div className={styles.searchBar}>
      <Input term={query} handleChange={handleChange} />
      {query && <ResultList loading={loading} results={results} />}
    </div>
  );
}
