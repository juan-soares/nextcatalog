export function useGlobalSearch() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleChange = (value: string) => setQuery(value);

  return {};
}
