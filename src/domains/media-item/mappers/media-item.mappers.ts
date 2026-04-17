import { MediaItem } from "../domain";
import { MediaItemdDocument } from "../infra";

export function mediaItemDocToMediaItem(
  mediaItemDoc: MediaItemdDocument,
): MediaItem {
  return {
    id: mediaItemDoc._id.toString(),
    title: mediaItemDoc.title,
    translatedTitle: mediaItemDoc.translatedTitle,
    slug: mediaItemDoc.slug,
    cover: mediaItemDoc.cover,
    releaseDate: mediaItemDoc.releaseDate,
  };
}
