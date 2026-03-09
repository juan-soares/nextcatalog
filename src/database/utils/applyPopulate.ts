import { MediaItemDoc, PopulateMap, PopulateOptions } from "../types";

export async function applyPopulate<T extends MediaItemDoc>(
  items: T[],
  populate: PopulateOptions,
): Promise<T[]> {
  return Promise.all(
    items.map(async (item) => {
      const populatedItem = { ...item };

      for (const option of populate) {
        const config = PopulateMap[option.path];

        if (!config) continue;

        const value = item[config.field];

        if (!value) continue;

        if (config.many) {
          populatedItem[option.path] =
            await config.repository.findManyByIds(value);
        } else {
          populatedItem[option.path] = await config.repository.findById(value);
        }
      }

      return populatedItem;
    }),
  );
}
