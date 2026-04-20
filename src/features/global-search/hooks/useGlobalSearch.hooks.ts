"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMediaItemsAction } from "@/actions/media-item";
import { SearchResult } from "../types";
import { mediaItemToSearchResult } from "../mappers";

export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const router = useRouter();

  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const trimmedQuery = query.trim();

    // 👉 evita busca desnecessária
    if (trimmedQuery.length < 2) {
      setResults([]);
      setLoading(false);
      setHasSearched(false);
      return;
    }

    // limpa debounce anterior
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      const currentRequestId = ++requestIdRef.current;

      setLoading(true);
      setHasSearched(false);

      try {
        const mediaItems = await searchMediaItemsAction(trimmedQuery);

        // ignora resposta antiga
        if (currentRequestId !== requestIdRef.current) return;

        const mapped = mediaItems.map(mediaItemToSearchResult);

        setResults(mapped);
        setHasSearched(true);
      } catch (error) {
        console.error(error);
        setResults([]);
        setHasSearched(true);
      } finally {
        // evita conflito de requests
        if (currentRequestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSubmit = () => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 2) return;

    router.push(`/pesquisa?q=${trimmedQuery}`);
  };

  return {
    query,
    results,
    loading,
    hasSearched,
    handleChange,
    handleSubmit,
  };
}
