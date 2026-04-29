import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "../models/media.model";
import { Media } from "../types";

export async function getMediaBySlugAndCategory(
  category: string,
  slug: string,
): Promise<Media> {
  await connectMongoDB();

  return MediaModel.findOne({
    slug,
    category,
  }).lean();
}
