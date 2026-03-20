import { MediaTypeDoc } from "@/database/types";
import { MediaTypeInfo } from "./MediaTypeSections.type";

export function mediaTypeDocToMediaTypeInfo(
  mediaTypeDoc: MediaTypeDoc[],
): MediaTypeInfo[] {
  return mediaTypeDoc.map(({ _id, label, slug }) => ({
    mediaTypeId: _id.toString(),
    title: label,
    href: `/${slug}`,
  }));
}
