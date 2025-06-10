import Link from "next/link";
import { CategoriesTitleMap } from "@/app/_lib/database/database.interface";
import { getCategoryRecordsByCollection } from "@/app/_lib/services";
import { EmptyList } from "../../../shared";
import { MoreResults } from "./";

interface IProps {
  categorySlug: string;
  categoryCollection: CategoriesTitleMap;
}

export async function List({ categorySlug, categoryCollection }: IProps) {
  const records = await getCategoryRecordsByCollection(categoryCollection);

  if (!records.length) return <EmptyList slug={categorySlug} />;

  return (
    <div>
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
      <MoreResults />
    </div>
  );
}
