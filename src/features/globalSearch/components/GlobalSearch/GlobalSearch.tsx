"use client";

import styles from "./GlobalSearch.module.css";
import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/features/globalSearch/components";
import { useGlobalSearch } from "@/features/globalSearch/hooks";

export function GlobalSearch() {
  const { query, handleChange, isLoading, results } = useGlobalSearch();

  return (
    <div className={styles.headerSearch}>
      <GlobalSearchInput query={query} onValueChange={handleChange} />
      <GlobalSearchResults
        query={query}
        isLoading={isLoading}
        results={results}
      />
    </div>
  );
}
