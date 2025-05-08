import Link from "next/link";
import { ICategoryRecord } from "@/app/_lib/interfaces";
import { getAllRecordsByCategoryCollection } from "@/app/_lib/db/collections";

interface IProps {
  collection: string;
  categorySlug: string;
}

export async function RecordsList({ collection, categorySlug }: IProps) {
  const categoryRecords: ICategoryRecord[] =
    await getAllRecordsByCategoryCollection("animes", 1, 15);

  if (!categoryRecords.length)
    return (
      <p>
        Sem itens na lista.{" "}
        <Link href={`/novo-registro/${categorySlug}`}>Adicionar?</Link>
      </p>
    );

  return (
    <ul>
      {categoryRecords.map(
        ({ id, slug, cover, title, translatedTitle, release }) => (
          <Link key={id} href={slug}>
            <img
              src={cover}
              alt={`Capa do título ${title}.`}
              width={80}
              height={80}
            />
            <h2>{title}</h2>
            <h3>{translatedTitle}</h3>
            <p>{release.slice(0, 4)}</p>
          </Link>
        )
      )}
    </ul>
  );
}
