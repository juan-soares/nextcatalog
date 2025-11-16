import { useEffect, useState } from "react";
import { IResultItem } from "./Searchbar.types";

export function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IResultItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsLoading(false);
      return;
    }

    let shouldUpdate = true;

    const handleSearch = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data: IResultItem[] = await res.json();
        if (shouldUpdate) {
          setResults(data);
        }
      } catch (error) {
        if (shouldUpdate) {
          console.error(error);
          setResults([]);
        }
      } finally {
        if (shouldUpdate) {
          setIsLoading(false);
        }
      }
    };

    const debounce = setTimeout(handleSearch, 300);

    return () => {
      shouldUpdate = false;
      clearTimeout(debounce);
    };
  }, [query]);

  return { query, handleChange, loading, results };
}
