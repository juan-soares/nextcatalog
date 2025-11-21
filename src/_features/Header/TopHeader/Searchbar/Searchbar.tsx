"use client";

import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { Input, ResultList } from ".";

export function Searchbar() {
  const { query, handleChange, results, isLoading, isShowingResults } =
    useSearch();

  return (
    <div className={styles.searchBar}>
      <Input term={query} handleChange={handleChange} />
      {isShowingResults && (
        <ResultList isLoading={isLoading} results={results} term={query} />
      )}
    </div>
  );
}
