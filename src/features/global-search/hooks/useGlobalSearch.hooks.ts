import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchResult } from "../types";
import { mediaItemToSearchResult } from "../mappers";

export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      // simula request ao servidor
      await new Promise((resolve) => setTimeout(resolve, 400));
      const mediaTypes = [];
      const results = mediaTypes.map(mediaItemToSearchResult);

      setResults(results);

      setLoading(false);
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
    if (!query.trim()) return;

    router.push(`/pesquisa?q=${query}`);
  };

  return { query, results, loading, handleChange, handleSubmit };
}
