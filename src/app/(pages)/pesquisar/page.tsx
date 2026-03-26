import { listSearchResults } from "@/features/globalSearch/services";
import { MediaList } from "@/features/mediaItemList/components";

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams.q ?? "";
  const results = await listSearchResults(query);

  return (
    <div>
      <h1>Resultados para:</h1>

      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
