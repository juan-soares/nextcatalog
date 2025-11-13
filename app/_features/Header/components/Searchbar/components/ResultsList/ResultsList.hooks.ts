import { useEffect, useState } from "react";
import { IResultItem } from "./ResultsList.types";
import { getSearchResults } from "./ResultList.actions";

export function useResults(query: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<IResultItem[]>([]);

  useEffect(() => {
    if (!query) return;

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      const data = await getSearchResults(query);
      setResults(data);
      setLoading(false);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return { loading, results };
}
