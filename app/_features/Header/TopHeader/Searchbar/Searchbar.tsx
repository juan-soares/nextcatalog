"use client";

import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { Input, ResultList } from ".";

export function Searchbar() {
  const {
    query,
    handleChange,
    loading,
    results,
    showResults,
    toggleShowResults,
    empty,
  } = useSearch();

  return (
    <div className={styles.searchBar}>
      <Input
        term={query}
        handleChange={handleChange}
        toggleShowResults={toggleShowResults}
      />
      {showResults && (
        <ResultList
          loading={loading}
          results={results}
          empty={empty}
          term={query}
        />
      )}
    </div>
  );
}
