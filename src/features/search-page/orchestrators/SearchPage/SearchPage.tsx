import { SearchHeader, SearchSort } from "../../components";

interface Props {
  query?: string;
}

export default function SearchPage({ query }: Props) {
  if (!query) {
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
      <SearchHeader query={query.trim()} numberOfResults={numberOfResults} />
      <main>
        <SearchSort />
      </main>
    </div>
  );
}
