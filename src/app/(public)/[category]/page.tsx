import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/config/category";
import { MediaCard, mapMediaToCard, listMedia } from "@/modules/media";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  if (!(categorySlug in CATEGORY_CONFIG)) return notFound();

  const validCategory = categorySlug as keyof typeof CATEGORY_CONFIG;
  const categoryConfig = CATEGORY_CONFIG[validCategory];

  const medias = await listMedia(validCategory);
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
