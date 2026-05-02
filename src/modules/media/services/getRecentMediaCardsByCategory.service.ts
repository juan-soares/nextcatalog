import { CategoryKey } from "@/modules/category";
import { MediaCard } from "../types";
import { MediaModel } from "../models";
import { toMediaCard } from "../mappers";
import { connectMongoDB } from "@/infra/database/mongodb";

export default async function getRecentMediaCardsByCategory(
  category: CategoryKey,
): Promise<MediaCard[]> {
  await connectMongoDB();

  const recentMedias = await MediaModel.find({ category })
    .sort({ updatedAt: "desc" })
    .limit(5)
    .lean();

  return recentMedias.map(toMediaCard);
}
