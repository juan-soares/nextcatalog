import database from "../../database";
import { IFranchise } from "../../database/database.interface";

export async function getAllFranchises(): Promise<IFranchise[]> {
  try {
    const franchises = await database.getCollectionRecords(
      "franchises",
      "alph"
    );

    return franchises;
  } catch (error) {
    console.error(`[getAllFranchises] Erro ao buscar franquias:`, error);

    return [];
  }
}
