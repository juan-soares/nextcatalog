import { CATEGORY_MAP } from "@/config/category";
import {
  getMediaBySlugAndCategory,
  mapMediaToDetails,
  MediaHero,
} from "@/modules/media";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    category: string;
    media: string;
  }>;
}

export default async function MediaPage({ params }: Props) {
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

  const {
    title,
    translatedTitle,
    cover,
    trailer,
    synopsis,
    acquired,
    complete,
    franchises,
    releaseYear,
    themes,
  } = mediaDetails;

  return (
    <div>
      <MediaHero
        title={title}
        translatedTitle={translatedTitle}
        cover={cover}
        trailer={trailer}
        synopsis={synopsis}
        acquired={acquired}
        complete={complete}
        franchises={franchises}
        releaseYear={releaseYear}
        category={category}
        themes={themes}
      />
    </div>
  );
}
