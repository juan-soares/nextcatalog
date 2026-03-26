import {
  MediaItem,
  MediaItemDocument,
} from "@/domains/mediaItem/mediaItem.types";
import { MediaItemModel } from "@/domains/mediaItem/mediaItem.model";
import { mediaItemMapper } from "@/domains/mediaItem/mediaItem.mappers";
import { connectMongo } from "@/database/mongodb/connection";
import { FindAllOptions } from "@/database/types";

export const mediaItemRepository = {
  async findAll(options: FindAllOptions<MediaItemDocument> = {}): Promise<MediaItem[]> {
    const { filter = {}, sort = { title: 1 }, limit = 5 } = options;

    await connectMongo();
    const mediaItemsDoc: MediaItemDocument[] = await MediaItemModel.find(filter)
      .populate("mediaTypeId")
      .sort(sort)
      .limit(limit)
      .lean()
      .exec();
    return mediaItemsDoc.map(mediaItemMapper.toMediaItemEntity);
  },
};
