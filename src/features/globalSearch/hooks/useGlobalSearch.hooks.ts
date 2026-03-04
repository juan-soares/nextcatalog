import { useEffect, useState } from "react";
import { SearchResult } from "../types";

export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleChange = (value: string) => setQuery(value);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const updateResults = async () => {
      setIsLoading(true);
      const res = [] as any;
      setResults(res);
      setIsLoading(false);
    };

    updateResults();
  }, [query, setIsLoading]);

  return { query, handleChange, isLoading, results, setIsLoading };
}
