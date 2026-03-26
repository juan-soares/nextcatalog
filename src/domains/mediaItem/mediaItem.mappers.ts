import { Types } from "mongoose";
import { MediaItem, MediaItemDocument } from "@/domains/mediaItem";
import { MediaType } from "@/domains/mediaType";

export const mediaItemMapper = {
  toMediaItemEntity({
    _id,
    title,
    translatedTitle,
    slug,
    cover,
    releaseDate,
    mediaTypeId,
  }: MediaItemDocument): MediaItem {
    return {
      id: _id.toString(),
      title,
      translatedTitle,
      slug,
      cover,
      releaseDate,
      mediaTypeId: mediaTypeId.toString(),
      mediaType: !(mediaTypeId instanceof Types.ObjectId)
        ? (mediaTypeId as MediaType)
        : undefined,
    };
  },
};
