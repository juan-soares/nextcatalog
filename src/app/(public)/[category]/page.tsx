import { notFound } from "next/navigation";
import {
  MediaCard,
  mapMediaToCard,
  listMedia,
  MediaFilters,
} from "@/modules/media";
import { CATEGORY_CONFIG, FILTER_CONFIG } from "@/config";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  if (!(categorySlug in CATEGORY_CONFIG)) return notFound();

  const validCategory = categorySlug as keyof typeof CATEGORY_CONFIG;
  const categoryConfig = CATEGORY_CONFIG[validCategory];
  const categoryFilters =
    FILTER_CONFIG[validCategory as keyof typeof FILTER_CONFIG] || [];

  const medias = await listMedia(validCategory);
  const mediasInfo = medias.map(mapMediaToCard);

  return (
    <div>
      <h1>{categoryConfig.label}</h1>
      <MediaFilters />

      {mediasInfo.map((mediaInfo) => (
        <MediaCard key={mediaInfo.href} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
}
