import { getMediaTypesAction } from "@/actions/media-type";
import { SearchHeader, SearchSort } from "../../components";

interface Props {
  q?: string;
  sort: "alph" | "recent" | "release";
}

export default async function SearchPage({ q, sort }: Props) {
  if (!q) {
    return (
      <p>
        Não foi possível realizar uma pesquisa. Por favor, utilize a barra de
        pesquisa.
      </p>
    );
  }

  const numberOfResults = 0;
  const mediaTypes = await getMediaTypesAction();

  const filters = [
    {
      legend: "Típo de Mídia",
      name: "mediaTypes",
      options: mediaTypes,
    },
  ];

  return (
    <div>
      <SearchHeader term={q.trim()} numberOfResults={numberOfResults} />

      <main>
        <SearchSort />
      </main>
    </div>
  );
}
