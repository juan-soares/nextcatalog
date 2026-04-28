import { notFound } from "next/navigation";
import { CATEGORY_CONFIG, MediaCategory } from "@/config/category";
import { MediaCard, mapMediaToCard, listMedia } from "@/modules/media";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const categoryConfig = CATEGORY_CONFIG[categorySlug as MediaCategory];

  if (!categoryConfig) return notFound();

  const medias = await listMedia(categorySlug);
  const mediasInfo = medias.map(mapMediaToCard);

  return (
    <div>
      <h1>{categoryConfig.label}</h1>
      {mediasInfo.map((mediaInfo) => (
        <MediaCard key={mediaInfo.href} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
}
