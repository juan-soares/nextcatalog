import { Sortbar, List, MoreResults } from ".";

interface IProps {
  categorySlug: string;
  categoryCollection: string;
}

export function Results({ categorySlug, categoryCollection }: IProps) {
  return (
    <div>
      <Sortbar categorySlug={categorySlug} />
      <List
        categorySlug={categorySlug}
        categoryCollection={categoryCollection}
      />
      <MoreResults />
    </div>
  );
}
