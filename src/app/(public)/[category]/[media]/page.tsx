import { CATEGORY_MAP } from "@/config/category";
import {
  getMediaBySlugAndCategory,
  mapMediaToDetails,
  MediaHero,
  MediaTabContent,
  MediaTabs,
} from "@/modules/media";

import { MediaTabs as MediaTabsType } from "@/modules/media/types";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    category: string;
    media: string;
  }>;
  searchParams: Promise<{
    tab?: MediaTabsType;
  }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { category: categorySlug, media: mediaSlug } = await params;
  const { tab } = await searchParams;
  const currentTab = tab || "info";

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
      <MediaTabs currentTab={currentTab} />
      <MediaTabContent currentTab={currentTab} mediaDetails={mediaDetails}/>
    </div>
  );
}
