import Link from "next/link";
import { useResults } from "./ResultsList.hooks";

interface IProps {
  query: string;
}

export function ResultsList({ query }: IProps) {
  const { loading, results } = useResults(query);

  if (loading) return <p>Carregando...</p>;
  if (results.length === 0) return <p>Nenhum resultado encontrado.</p>;

  return (
    <ul>
      {results.map(
        ({ id, slug, title, releaseYear, translatedTitle, categoryTitle }) => (
          <li key={id}>
            <Link href={slug}>
              <strong>{`${title} (${releaseYear})`}</strong>
              <p>{translatedTitle}</p>
              <span>{categoryTitle}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
