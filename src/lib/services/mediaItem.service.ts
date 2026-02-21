import {
  CategoryDoc,
  FranchisePopulated,
  MediaItemCard,
  MediaItemDoc,
  MediaItemPopulated,
  SortOptions,
} from "@/src/types";
import {
  categoryRepository,
  franchiseRepository,
  mediaItemRepository,
} from "@/src/data/repositories";
import { sort } from "../utils";

async function populateMediaItem(
  mediaItemDoc: MediaItemDoc,
): Promise<MediaItemPopulated> {
  const [category, franchise] = (await Promise.all([
    categoryRepository.getCategoryById(mediaItemDoc.categoryId),
    franchiseRepository.getFranchiseById(mediaItemDoc.franchiseId),
  ])) as [category: CategoryDoc, franchise: FranchisePopulated];

  const { categoryId, franchiseId, ...rest } = mediaItemDoc;

  return { ...rest, category, franchise };
}

export async function listAllMediaItemsPopulated(): Promise<
  MediaItemPopulated[]
> {
  const allMediaItems = await mediaItemRepository.getAllMediaItems();
  const mediaItemsPopulated = await Promise.all(
    allMediaItems.map(populateMediaItem),
  );
  return mediaItemsPopulated;
}

export async function listMediaItemCards(
  sortOptions: SortOptions,
  limit: number = 5,
): Promise<MediaItemCard[]> {
  const mediaItemList: MediaItemPopulated[] =
    await listAllMediaItemsPopulated();

  const mediaItemsCards: MediaItemCard[] = mediaItemList.map((mediaItem) => {
    const { releaseDate, ...rest } = mediaItem;

    const mediaItemCard = {
      ...rest,
      releaseYear: new Date(releaseDate).getFullYear().toString(),
    };

    return mediaItemCard;
  });

  const { sortBy = "lastUpdateAt", sortDirection = "desc" } = sortOptions;

  const sortedMediaItemsCards = sort(mediaItemsCards, sortBy, sortDirection);

  const limitedMediaItemsCards = sortedMediaItemsCards.slice(0, limit);

  return limitedMediaItemsCards;
}
