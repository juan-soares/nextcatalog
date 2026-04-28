import { MediaCategory } from "@/config/category";
import { findMedia } from "../repositories/media.repository";
import { connectMongoDB } from "@/infra/database/mongodb";

export type MediaFilters = {
  languages?: string[];
  platforms?: string[];
  players?: (number | string)[];
  genres?: string[];
  themes?: string[];
  resolutions?: string[];
};

export async function listMedia(
  categorySlug: MediaCategory,
  filters?: MediaFilters,
) {
  await connectMongoDB();
  const query: Record<string, any> = {
    category: categorySlug,
  };

  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      if (!value || (Array.isArray(value) && value.length === 0)) continue;

      query[`details.${key}`] = Array.isArray(value) ? { $in: value } : value;
    }
  }

  return findMedia(query);
}
