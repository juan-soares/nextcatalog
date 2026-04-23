import { CATEGORY_MAP } from "@/config/category";
import {
  getMediaBySlugAndCategory,
  mapMediaToDetails,
  MediaHero,
  MediaTabs,
} from "@/modules/media";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    category: string;
    media: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { category: categorySlug, media: mediaSlug } = await params;

  const category = CATEGORY_MAP[categorySlug as keyof typeof CATEGORY_MAP];

  if (!category) {
    notFound();
  }

  const media = await getMediaBySlugAndCategory(mediaSlug, category);
  const mediaDetails = mapMediaToDetails(media);

  if (!mediaDetails) {
    notFound();
  }

  return (
    <div>
      <MediaHero {...mediaDetails} />
      <MediaTabs />
    </div>
  );
}
