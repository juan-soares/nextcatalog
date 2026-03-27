import { mediaTypeServices } from "@/domains/mediaType";
import { MediaTypeInfo } from "../types";

export async function getMediaTypeInfoBySlug(
  slug: string,
): Promise<MediaTypeInfo> {
  const mediaType = await mediaTypeServices.listMediaTypeBySlug(slug);

  return {
    title: mediaType.label,
  };
}
