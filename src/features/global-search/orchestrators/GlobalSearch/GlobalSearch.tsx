"use client";

import { useGlobalSearch } from "../../hooks";
import { SearchInput, SearchResults } from "../../components";

export default function GlobalSearch() {
  const { query, results, hasSearched, loading, handleChange, handleSubmit } =
    useGlobalSearch();

  return (
    <div>
      <SearchInput
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {query && (
        <SearchResults
          results={results}
          loading={loading}
          hasSearched={hasSearched}
        />
      )}
    </div>
  );
}
