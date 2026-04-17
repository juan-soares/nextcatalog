import { MediaItem, MediaItemFindOptions } from "../domain";
import { mediaItemDocToMediaItem } from "../mappers";
import { MediaItemModel } from "./media-item.model";
import {
  buildFilters,
  buildSort,
  buildTextSearch,
} from "./media-item.query-builder";

export const mediaItemRepository = {
  async search(options: MediaItemFindOptions): Promise<MediaItem[]> {
    const { query, filters, sort, limit = 20 } = options;

    const mongoQuery = {
      ...buildTextSearch(query),
      ...buildFilters(filters),
    };

    let dbQuery = MediaItemModel.find(mongoQuery);
    const sortQuery = buildSort(sort);
    if (sortQuery) {
      dbQuery = dbQuery.sort(sortQuery);
    }
    dbQuery = dbQuery.limit(limit);

    const results = await dbQuery.lean();

    return results.map(mediaItemDocToMediaItem);
  },
};
