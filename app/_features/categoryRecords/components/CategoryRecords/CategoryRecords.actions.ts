import { IDatabase } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getCategoryRecordsByCollection(
  collection: keyof IDatabase
) {
  const records = await db.collection(collection).find({});
  return records;
}
