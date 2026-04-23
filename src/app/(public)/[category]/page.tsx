import { notFound } from "next/navigation";
import { CATEGORY_MAP } from "@/config/category";
import { MediaCard, mapMediaToCard, listMedia } from "@/modules/media";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = CATEGORY_MAP[categorySlug as keyof typeof CATEGORY_MAP];

  if (!category) {
    return notFound();
  }

  const medias = await listMedia(category);
  const mediasInfo = medias.map(mapMediaToCard);

  return (
    <div>
      <h1>{category}</h1>
      {mediasInfo.map((mediaInfo) => (
        <MediaCard key={mediaInfo.href} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
}
