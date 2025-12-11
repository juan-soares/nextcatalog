import { db } from "@/app/_data/db";
import { ICategoryRecentRecord } from "../types";
import { IDatabase } from "@/app/_data/data.types";

export async function getCategoryRecentRecords(
  collection: keyof IDatabase
): Promise<ICategoryRecentRecord[]> {
  const recentRecords = await db
    .collection(collection)
    .find({ sortBy: "recent", limit: 5 });

  return recentRecords;
}
