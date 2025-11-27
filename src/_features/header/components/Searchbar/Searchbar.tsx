"use client";

import { useState, useEffect } from "react";
import styles from "./Searchbar.module.css";
import { SearchResults } from "..";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

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
      setResults(data.items);
      setLoading(false);
      setShowDropdown(true);
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
