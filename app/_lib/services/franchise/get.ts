import database from "../../database";
import { IFranchise } from "../../database/database.interface";

export async function getAllFranchises(
  limit: number | null
): Promise<IFranchise[]> {
  try {
    const franchises = await database.getCollectionRecords("franchises");

    if (limit) return franchises.slice(0, limit);

    return franchises;
  } catch (error) {
    return [];
  }
}
