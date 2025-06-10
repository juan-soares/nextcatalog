import { CategoriesTitleMap } from "@/app/_lib/database/database.interface";
import { Sortbar, List } from ".";

interface IProps {
  categorySlug: string;
  categoryCollection: CategoriesTitleMap;
}

export function Results({ categorySlug, categoryCollection }: IProps) {
  return (
    <div>
      <Sortbar categorySlug={categorySlug} />
      <List
        categorySlug={categorySlug}
        categoryCollection={categoryCollection}
      />
    </div>
  );
}
