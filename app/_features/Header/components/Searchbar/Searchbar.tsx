"use client";

import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { Input, ResultList } from "./components";

export function Searchbar() {
  const {
    query,
    handleChange,
    loading,
    results,
    showResults,
    setShowResults,
    empty,
  } = useSearch();

  return (
    <div className={styles.searchBar}>
      <Input
        term={query}
        handleChange={handleChange}
        setShowResults={setShowResults}
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
