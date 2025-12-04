"use client";

import { useState, useEffect } from "react";
import styles from "./Searchbar.module.css";
import { ISearchItem } from "../../../../types";
import { SearchInput, SearchResults } from ".";

export function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ISearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);

      const res = await fetch("/api/header/search", {
        method: "POST",
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResults(data);
      setLoading(false);
      setShowDropdown(true);
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <SearchInput
        value={query}
        onChange={setQuery}
        onFocus={() => query && setShowDropdown(true)}
      />

      {showDropdown && (
        <SearchResults
          query={query}
          loading={loading}
          results={results}
          onClose={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
}
