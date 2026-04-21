import { Suspense } from "react";
import {
  SearchFilters,
  SearchGridResults,
  SearchHeader,
  SearchSort,
} from "../../components";

interface Props {
  q?: string;
  sort?: "alph" | "recent" | "release";
  mediaTypes?: string | string[];
}

export default async function SearchPage({ q, sort, mediaTypes }: Props) {
  if (!q) {
    return (
      <p>
        Não foi possível realizar uma pesquisa. Por favor, utilize a barra de
        pesquisa.
      </p>
    );
  }

  const filterMediaTypes = Array.isArray(mediaTypes)
    ? mediaTypes
    : mediaTypes
      ? [mediaTypes]
      : [];

  const numberOfResults = 0;

  return (
    <div>
      <SearchHeader term={q.trim()} numberOfResults={numberOfResults} />
      <SearchFilters />
      <main>
        <SearchSort />
        <Suspense fallback={<p>Carregando...</p>}>
          <SearchGridResults />
        </Suspense>
      </main>
    </div>
  );
}
