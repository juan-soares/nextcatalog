import { MediaItem } from "@/domains/mediaItem/mediaItem.types";
import { mediaItemRepository } from "@/domains/mediaItem/mediaItem.repository";

export const mediaItemService = {
  async searchByText(query: string): Promise<MediaItem[]> {
    if (!query.trim()) return [];

    const results = await mediaItemRepository.findAll({
      filter: {
        $or: [
          { title: new RegExp(query, "i") },
          { translatedTitle: new RegExp(query, "i") },
        ],
      },
      sort: { title: 1 },
      limit: 5,
    });

    return results;
  },

  async listByMediaTypeId(
    mediaTypeIdToSearch: string,
    limit = 5,
  ): Promise<MediaItem[]> {
    const results = await mediaItemRepository.findAll({
      filter: { mediaTypeId: mediaTypeIdToSearch },
      sort: { updatedAt: -1 },
      limit,
    });

    return results;
  },
};
