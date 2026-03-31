import { mediaTypeServices } from "@/domains/mediaType";
import { MediaTypeInfo } from "../types";
import { MediaCardInfo } from "@/shared/components/layout/MediaCardList";
import { mediaItemService } from "@/domains/mediaItem";
import { mediaInfoMapper } from "@/shared/mappers";

export async function getMediaTypeInfoBySlug(
  slug: string,
): Promise<MediaTypeInfo> {
  const mediaType = await mediaTypeServices.listMediaTypeBySlug(slug);

  return {
    title: mediaType.label,
    href: `/${mediaType.slug}`,
  };
}

export async function getMediaItemsByMediaSlug(
  slug: string,
): Promise<MediaCardInfo[]> {
  const mediaType = await mediaTypeServices.listMediaTypeBySlug(slug);
  const mediaItems = await mediaItemService.listByMediaTypeId(mediaType.id);
  const mediaInfo = mediaItems.map(mediaInfoMapper.toMediaCardInfo);

  return mediaInfo;
}

export async function getMediaTypeFiltersBySlug(slug: string): Promise<[]> {
  const mediaTye = await mediaTypeServices.listMediaTypeBySlug(slug);
  [];

  return [];
}
