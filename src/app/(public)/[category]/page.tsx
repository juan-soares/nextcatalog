import { notFound } from "next/navigation";
import {
  MediaCard,
  mapMediaToCard,
  listMedia,
  MediaFilters,
  MediaSort,
} from "@/modules/media";
import { CATEGORY_CONFIG, FILTER_CONFIG } from "@/config";
import { buildMediaQuery } from "@/modules/media/services/query/buildMediaQuery.service";

interface Props {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = params;

  const { mediaList, totalPages } = await listMedia({
    category,
    searchParams,
  });

  return (
    <div>
      <h1>{categoryConfig.label}</h1>
      <MediaFilters filters={categoryFilters} />
      <MediaSort />

      {mediaList.map((mediaInfo) => (
        <MediaCard key={mediaInfo.href} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
}
