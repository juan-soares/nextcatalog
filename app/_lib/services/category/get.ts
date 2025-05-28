import database from "../../database";
import { ICategory } from "../../database/database.interface";
import { SortTypeMap } from "../../utils";

export async function getCategories(
  sortType: SortTypeMap
): Promise<ICategory[]> {
  try {
    const categories: ICategory[] = await database.getCollectionRecords(
      "categories"
    );
    return categories;
  } catch (error) {
    console.error("Ops! Não foi possível acessar categorias");

    return [];
  }
}
