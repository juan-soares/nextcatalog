import { ICollectionInfo } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

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
