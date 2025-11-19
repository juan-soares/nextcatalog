import { useEffect, useState, useTransition } from "react";
import { IResultItem } from "./Searchbar.types";
import { getSearchResults } from "./Searchbar.actions";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IResultItem[]>([]);
  const [isPending, startTransition] = useTransition();
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  useEffect(() => {
    if (!query) {
      setShowResults(false);
      setResults([]);
      setIsSearching(false);
      return;
    }

    setShowResults(true);
    setIsSearching(true);

    const debounceTime = 300;

    const handler = setTimeout(() => {
      startTransition(async () => {
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          const data: IResultItem[] = await res.json();
          setResults(data);
        } catch (error) {
          console.error(error);
          setResults([]);
        } finally {
          setIsSearching(false);
        }
      });
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [query]);

  const loading = isPending && query.length > 0;
  const empty =
    !loading && !isSearching && results.length === 0 && query.length > 0;

  return {
    query,
    handleChange,
    results,
    showResults,
    setShowResults,
    loading,
    empty,
  };
}
