"use client";

import { useState } from "react";
import styles from "./GlobalSearch.module.css";
import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/features/globalSearch/components";

export function GlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={styles.headerSearch}>
      <GlobalSearchInput query={query} onValueChange={setQuery} />
      <GlobalSearchResults
        query={query}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
