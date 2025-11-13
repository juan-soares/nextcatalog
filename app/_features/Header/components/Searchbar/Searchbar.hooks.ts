import { useState } from "react";

export function useSearch() {
  const [query, setQuery] = useState<string>("");

  return { query, setQuery };
}
