import Link from "next/link";
import { EmptyList } from "../../../shared";

export async function List({ categorySlug }: { categorySlug: string }) {
  const records = [];

  if (!records.length) return <EmptyList slug={categorySlug} />;

  return (
    <ul>
      {records.map(({ id, slug, cover, title, release }) => (
        <li key={id}>
          <Link href={slug}>
            <img src={cover} alt={`Capa do título ${title}.`} />
            <h2>{title}</h2>
            <p>{release.slice(0, 4)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
