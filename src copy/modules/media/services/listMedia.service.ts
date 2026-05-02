import { findMedia, countMedia } from "../repositories/media.repository";
import { Media } from "../types";
import { buildMediaQuery } from "./query/buildMediaQuery.service";

type Params = {
  category: string;
  searchParams: Record<string, string | string[] | undefined>;
};

export async function listMedia({
  category,
  searchParams,
}: Params): Promise<{ mediaList: Media[]; totalPages: number }> {
  const { query, sort, skip, limit, hasSearch } = buildMediaQuery({
    category,
    searchParams,
  });

  const mediaList = await findMedia({
    query,
    sort,
    skip,
    limit,
  });

  const total = await countMedia(query);

  const totalPages = Math.ceil(total / limit);

  return {
    mediaList,
    totalPages,
  };
}
