import { mediaItemRepository } from "@/database/repositories";
import { MediaTypeSort } from "../type";
import { ObjectId } from "mongoose";

export async function listMediaItemCards(
  mediaTypeId: string,
  resultsToShow: number,
  order: MediaTypeSort,
) {
  const allMediaItems = await mediaItemRepository.findAll({query: {mediaTypeId: mediaTypeId},
    sort: [order.sortBy]: order.SortOrder,
    limit: resultsToShow})
    

  return [];
}
