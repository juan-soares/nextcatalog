import { useEffect, useState } from "react";
import { IResultItem } from "./ResultsList.types";
import { getSearchResults } from "./ResultList.actions";

export function useResults(query: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<IResultItem[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      const data = await getSearchResults(query, "alph");
      setResults(data);
      setLoading(false);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return { loading, results };
}
