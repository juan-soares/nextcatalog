import { CATEGORY_CONFIG } from "./category.config";
import { FILTER_OPTIONS } from "./filter.config";

export type FilterKey = keyof typeof FILTER_OPTIONS;

type FilterOptionValue<T extends FilterKey> =
  (typeof FILTER_OPTIONS)[T][number]["value"];

type DetailsFromFilters<TFilters extends readonly FilterKey[]> = {
  [K in TFilters[number]]?: FilterOptionValue<K>[];
};

export type MediaCategory = keyof typeof CATEGORY_CONFIG;

export type MediaDetailsByCategory = {
  [K in MediaCategory]: DetailsFromFilters<
    (typeof CATEGORY_CONFIG)[K]["filters"]
  >;
};

export type MediaDetails<TCategory extends MediaCategory> =
  MediaDetailsByCategory[TCategory];
