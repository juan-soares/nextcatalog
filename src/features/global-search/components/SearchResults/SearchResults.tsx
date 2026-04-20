import Link from "next/link";
import Image from "next/image";
import { SearchResult } from "../../types";

interface Props {
  results: SearchResult[];
  hasSearched: boolean;
  loading: boolean;
}

export default function SearchResults({
  results,
  loading,
  hasSearched,
}: Props) {
  if (loading) return <p>Carregando...</p>;
  if (hasSearched && !results.length) {
    return <p>Sem resultados.</p>;
  }

  if (!hasSearched) return null;

  return (
    <ul>
      {results.map(({ id, href, cover, title, releaseYear }) => (
        <li key={id}>
          <Link href={href}>
            <Image
              src={cover}
              alt={`Capa do título ${title}.`}
              width={60}
              height={60}
            />
            <strong>{title}</strong>
            <span>{releaseYear}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
