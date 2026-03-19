import { MediaItemDoc } from "@/database/types";
import { MediaItemCardInfo } from "../type";

export function mediaItemDocToMediaItemCardInfo(
  mediaItemDoc: MediaItemDoc[],
): MediaItemCardInfo[] {
  return mediaItemDoc.map(({ slug, title, cover, releaseDate, synopsis }) => ({
    title,
    cover,
    synopsis,
    href: `/${slug}`,
    releaseYear: new Date(releaseDate).getFullYear().toString(),
  }));
}
