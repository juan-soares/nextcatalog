import { CATEGORY_CONFIG } from "@/config/category";
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
  params: Promise<{ category: string; media: string }>;
  searchParams: Promise<{ tab?: string }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { category: categorySlug, media: mediaSlug } = await params;
  if (!(categorySlug in CATEGORY_CONFIG)) return notFound();

  const { tab } = await searchParams;
  const validTabs = ["info", "gallery", "files", "sequel"] as const;
  const currentTab: MediaTabsType =
    tab && validTabs.includes(tab as MediaTabsType)
      ? (tab as MediaTabsType)
      : "info";

  const media = await getMediaBySlugAndCategory(categorySlug, mediaSlug);
  if (!media) return notFound();

  const mediaDetails = mapMediaToDetails(media);

  return (
    <div>
      <MediaHero {...mediaDetails} />
      <MediaTabs currentTab={currentTab} />
      <MediaTabContent currentTab={currentTab} mediaDetails={mediaDetails} />
    </div>
  );
}
