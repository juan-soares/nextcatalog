import { CATEGORY_CONFIG, MEDIA_TAB_CONFIG } from "@/config";

import {
  getMediaBySlugAndCategory,
  mapMediaToDetails,
  MediaHero,
  MediaTabs,
} from "@/modules/media";

import { notFound } from "next/navigation";

interface Props {
  params: { category: string; media: string };
  searchParams?: { tab?: string };
}

export default async function Page({ params, searchParams }: Props) {
  const { category, media: mediaSlug } = params;

  if (!(category in CATEGORY_CONFIG)) return notFound();

  const media = await getMediaBySlugAndCategory(category, mediaSlug);
  if (!media) return notFound();
  const mediaDetails = mapMediaToDetails(media);

  const tab = searchParams?.tab;
  const activeTab = tab && tab in MEDIA_TAB_CONFIG ? tab : "info";

  return (
    <div>
      <MediaHero {...mediaDetails} />
      <MediaTabs activeTab={activeTab} mediaDetails={mediaDetails} />
    </div>
  );
}
