import { ICategoryRecord, ICollectionInfo } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";
import { getAnimesByPage } from "../anime";

export async function getAllCollectionsInfo(): Promise<ICollectionInfo[]> {
  try {
    const db = await connectToDatabase();

    return db["collectionsInfo"].sort(
      (a: ICollectionInfo, b: ICollectionInfo) => a.title.localeCompare(b.title)
    );
  } catch (error) {
    return [];
  }
}

export async function getCollectionInfoBySlug(
  slugToFind: string
): Promise<ICollectionInfo> {
  try {
    const db = await connectToDatabase();

    return db["collectionsInfo"].find(
      ({ slug }: { slug: string }) => slug === `/${slugToFind}`
    );
  } catch (error) {
    throw new Error("Ops!");
  }
}

export async function getCategories(): Promise<ICollectionInfo[]> {
  try {
    const db = await connectToDatabase();

    return db["collectionsInfo"]
      .filter(({ isCategory }: { isCategory: boolean }) => isCategory === true)
      .sort((a: ICollectionInfo, b: ICollectionInfo) =>
        a.title.localeCompare(b.title)
      );
  } catch (error) {
    return [];
  }
}

export async function getAllCategoriesRecords(): Promise<ICategoryRecord[]> {
  try {
    const db = await connectToDatabase();

    const categories = await getCategories();

    const allCategoriesRecords = categories
      .map(({ collection }) => db[collection])
      .flat()
      .sort((a: ICollectionInfo, b: ICollectionInfo) =>
        a.title.localeCompare(b.title)
      );

    console.log(allCategoriesRecords);
    return allCategoriesRecords;
  } catch (error) {
    return [];
  }
}

export async function getAllRecordsByCategoryCollection(
  categoryCollection: string,
  page: number,
  limit: number
): Promise<ICategoryRecord[]> {
  const recordsToSend: { [key: string]: ICategoryRecord[] } = {
    animes: await getAnimesByPage(page, limit),
  };

  return recordsToSend[categoryCollection];
}
