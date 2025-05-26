import database from "../../database";
import { IFranchise } from "../../database/database.interface";
import { SortTypeMap, sortBy } from "../../utils";

export async function getAllFranchises(
  limit: number | null,
  sortType: SortTypeMap
): Promise<IFranchise[]> {
  try {
    const franchises = await database.getCollectionRecords("franchises");

    const limited = limit ? franchises.slice(0, limit) : franchises;

    return sortBy(limited, sortType);
  } catch (error) {
    console.error(`[getAllFranchises] Erro ao buscar franquias:`, error);

    return [];
  }
}
