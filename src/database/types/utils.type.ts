import { mediaTypeRepository } from "@/database/repositories/mediaType.repository";

export type FindOptions<T> = {
  filter?: Partial<T>;
  sortBy?: keyof T;
  order?: "asc" | "desc";
  limit?: number;
  populate?: boolean;
};

export type PopulateOptions = {
  path: string;
};

export const PopulateMap = {
  mediaType: {
    field: "mediaTypeId",
    repository: mediaTypeRepository,
    many: false,
  },
};
