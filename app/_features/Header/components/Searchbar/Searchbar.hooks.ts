import { useState } from "react";

export function useSearch() {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return { query, handleChange };
}
