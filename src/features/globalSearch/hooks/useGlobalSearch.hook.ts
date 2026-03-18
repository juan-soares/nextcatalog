import { useEffect, useState } from "react";
import { SearchResult } from "../types";
import { listSearchResults } from "../services";

export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleChange = (value: string) => setQuery(value);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timeout = setTimeout(async () => {
      const res: SearchResult[] = await listSearchResults(query);
      setResults(res);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return { query, handleChange, isLoading, results, setIsLoading };
}
