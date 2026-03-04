"use client";

import { useState } from "react";
import styles from "./GlobalSearch.module.css";
import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/features/globalSearch/components";
import { useGlobalSearch } from "@/features/globalSearch/hooks";

export function GlobalSearch() {
  const { query, handleChange, isLoading, results, setIsLoading } =
    useGlobalSearch();

  return (
    <div className={styles.headerSearch}>
      <GlobalSearchInput query={query} onValueChange={handleChange} />
      <GlobalSearchResults isLoading={isLoading} results={results} />
    </div>
  );
}
