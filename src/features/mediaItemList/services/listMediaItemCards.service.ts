import { mediaItemRepository } from "@/database/repositories";
import { MediaTypeSort } from "../type";
import { ObjectId } from "mongoose";
import { mediaItemDocToMediaItemCardInfo } from "../mapper";

export async function listMediaItemCards(
  mediaTypeId: string,
  resultsToShow: number,
  order: MediaTypeSort,
) {
  const allMediaItems = await mediaItemRepository.findAll({
    query: { mediaTypeId: mediaTypeId as ObjectId },
    limit: resultsToShow,
  });

  return mediaItemDocToMediaItemCardInfo(allMediaItems);
}
