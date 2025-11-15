import { useState } from "react";
import { IResultItem } from "./Searchbar.types";

export function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IResultItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return { query, handleChange, loading, results };
}
