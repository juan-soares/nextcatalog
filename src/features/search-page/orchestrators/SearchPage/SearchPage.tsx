import { SearchFilters, SearchHeader, SearchSort } from "../../components";

interface Props {
  q?: string;
}

export default async function SearchPage({ q }: Props) {
  if (!q) {
    return (
      <p>
        Não foi possível realizar uma pesquisa. Por favor, utilize a barra de
        pesquisa.
      </p>
    );
  }

  const numberOfResults = 0;

  return (
    <div>
      <SearchHeader term={q.trim()} numberOfResults={numberOfResults} />
      <SearchFilters />
      <main>
        <SearchSort />
      </main>
    </div>
  );
}
