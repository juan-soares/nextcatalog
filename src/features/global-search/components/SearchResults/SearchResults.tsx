import Link from "next/link";
import Image from "next/image";
import { SearchResult } from "../../types";

interface Props {
  results: SearchResult[];
  loading: boolean;
}

export default function SearchResults({ results, loading }: Props) {
  if (loading) return <p>Carregando...</p>;
  if (!loading && !results.length) return <p>Sem resultados.</p>;

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
