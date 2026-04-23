import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "../models/media.model";
import { Media } from "../types";

export async function getMediaBySlugAndCategory(
  slug: string,
  category: string,
): Promise<Media> {
  await connectMongoDB();

  return MediaModel.findOne({
    slug,
    category,
  }).lean();
}
