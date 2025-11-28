"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { ISearchItem, IUseSearchResult } from "../types";

export function useSearch(query: string): IUseSearchResult {
  const debouncedQuery = useDebounce(query, 400);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ISearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    let canceled = false;

    async function run() {
      setLoading(true);

      const res = await fetch("/api/header/search", {
        method: "POST",
        body: JSON.stringify({ query: debouncedQuery }),
      });

      if (canceled) return;

      const data = await res.json();
      setResults(data.items);
      setLoading(false);
      setShowDropdown(true);
    }

    run();

    return () => {
      canceled = true;
    };
  }, [debouncedQuery]);

  return {
    loading,
    results,
    showDropdown,
    setShowDropdown,
  };
}
