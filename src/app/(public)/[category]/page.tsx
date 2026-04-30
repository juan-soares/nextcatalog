import { notFound } from "next/navigation";
import {
  MediaCard,
  mapMediaToCard,
  listMedia,
  MediaFilters,
  MediaSort,
} from "@/modules/media";
import { CATEGORY_CONFIG, FILTER_CONFIG } from "@/config";

interface Props {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
}

function buildFilters(searchParams: Record<string, any>) {
  const filters: Record<string, any> = {};

  Object.entries(searchParams).forEach(([key, value]) => {
    if (!value) return;

    const values = String(value).split(",");

    filters[key] = { $in: values };
  });

  return filters;
}

function buildSearch(search?: string) {
  if (!search) return {};

  return {
    $or: [
      { title: { $regex: search, $options: "i" } },
      { translatedTitle: { $regex: search, $options: "i" } },
    ],
  };
}

function getSort(sort?: string) {
  switch (sort) {
    case "title":
      return { title: 1 };

    case "releaseDate":
      return { releaseDate: -1 };

    case "recent":
    default:
      return { updatedAt: -1 };
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = params;

  const categoryConfig =
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];

  if (!categoryConfig) return notFound();

  const categoryFilters = FILTER_CONFIG[categoryConfig];
  const mongoFilters = buildFilters(searchParams);

  const sort = getSort(
    typeof searchParams.sort === "string" ? searchParams.sort : undefined,
  );

  const query = {
    category,
    ...mongoFilters,
  };

  const medias = await listMedia(categoryConfig, query, sort);
  const mediasInfo = medias.map(mapMediaToCard);

  return (
    <div>
      <h1>{categoryConfig.label}</h1>
      <MediaFilters filters={categoryFilters} />
      <MediaSort />

      {mediasInfo.map((mediaInfo) => (
        <MediaCard key={mediaInfo.href} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
}
