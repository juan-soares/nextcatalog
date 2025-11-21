import { useEffect, useState, useTransition } from "react";
import { IResultItem } from "./Searchbar.types";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowingResults, setIsShowingResults] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsShowingResults(false);
      setIsLoading(false);
      return;
    }

    setIsShowingResults(true);
    setIsLoading(true);

    const delayQuery = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data: IResultItem[] = await res.json();
      setResults(data);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(delayQuery);
  }, [query]);

  return {
    query,
    handleChange,
    results,
    isLoading,
    isShowingResults,
  };
}
