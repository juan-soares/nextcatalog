"use client";

import styles from "./GlobalSearch.module.css";
import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/features/globalSearch/components";
import { useGlobalSearch } from "@/features/globalSearch/hooks";

export default function GlobalSearch() {
  const { query, handleChange, isLoading, results } = useGlobalSearch();

  return (
    <div className={styles.globalSearch}>
      <GlobalSearchInput query={query} onValueChange={handleChange} />
      <GlobalSearchResults
        query={query}
        isLoading={isLoading}
        results={results}
      />
    </div>
  );
}
