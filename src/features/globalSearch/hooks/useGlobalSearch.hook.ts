import { useEffect, useState } from "react";
import { SearchResult } from "../types";

export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleChange = (value: string) => setQuery(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        setResults([]);
        return;
      }

      const updateResults = async () => {
        setIsLoading(true);
        const res: SearchResult[] = [];
        setResults(res);
        setIsLoading(false);
      };

      updateResults();
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return { query, handleChange, isLoading, results, setIsLoading };
}
