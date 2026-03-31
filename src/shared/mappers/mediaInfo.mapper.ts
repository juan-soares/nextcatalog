import { MediaItem } from "@/domains/mediaItem";
import { MediaCardInfo } from "@/shared/components/layout/MediaCardList";

export const mediaInfoMapper = {
  toMediaCardInfo({
    id,
    slug,
    cover,
    title,
    releaseDate,
    synopsis,
  }: MediaItem): MediaCardInfo {
    return {
      id,
      href: `/${slug}`,
      cover,
      title,
      releaseYear: new Date(releaseDate).getFullYear().toString(),
      synopsis,
    };
  },
};
