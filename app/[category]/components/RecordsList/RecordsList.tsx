import { IRecord } from "@/app/_lib/interfaces";
import Link from "next/link";
import { SortBy } from "./SortBy";
import { getRecordsByCategoryCollection } from "@/app/_lib/db/records";

interface IProps {
  categoryCollection: string;
}

export async function RecordsList({ categoryCollection }: IProps) {
  const results: IRecord[] = await getRecordsByCategoryCollection(
    categoryCollection,
    15
  );

  if (!results.length) return <p> Sem itens na lista.</p>;

  return (
    <ul>
      <SortBy />
      {results.map(({ id, slug, cover, title, release }) => (
        <li key={id}>
          <Link href={slug}>
            <img src={cover} alt={`Imagem de capa do título ${title}.`} />
            <h2>{title}</h2>
            <p>{`(${release.slice(0, 4)})`}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
