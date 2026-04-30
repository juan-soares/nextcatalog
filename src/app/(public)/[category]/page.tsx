import { listMedia, MediaFilters, MediaSort, MediaList } from "@/modules/media";
import { CATEGORY_CONFIG, FILTER_CONFIG } from "@/config";
import { notFound } from "next/navigation";

interface Props {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = params;
  const categoryConfig =
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];

  if (!categoryConfig) return notFound();

  const categoryFilters =
    FILTER_CONFIG[categoryConfig.slug as keyof typeof FILTER_CONFIG];

  const { mediaList, totalPages } = await listMedia({
    category,
    searchParams,
  });

  return (
    <div>
      <h1>{categoryConfig.label}</h1>
      <MediaFilters filters={categoryFilters} />
      <MediaSort />
      <MediaList list={mediaList}/>
    </div>
  );
}
