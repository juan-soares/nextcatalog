import { Sortbar, List, MoreResults } from ".";

export function Results({ categorySlug }: { categorySlug: string }) {
  return (
    <div>
      <Sortbar categorySlug={categorySlug} />
      <List categorySlug={categorySlug} />
      <MoreResults />
    </div>
  );
}
