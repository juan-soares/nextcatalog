import { mediaTypeRepository } from "@/database/repositories";
import { IMediaSection } from "./HomePage.type";

export async function listSectionsWithMediaItems(
  limit = 5,
): Promise<IMediaSection[]> {
  const mediaTypes = await mediaTypeRepository.findAll();
  mediaTypes.map(({ _id, label, slug }) => {
    return { title: label, href: `/${slug}`, mediaItemCardsInfo: [] };
  });
}
