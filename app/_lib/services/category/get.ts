import database from "../../database";
import {
  CategoriesTitleMap,
  ICategory,
} from "../../database/database.interface";
import { SortTypeByColletion } from "../../utils";

export async function getCategories(
  sortType: SortTypeByColletion["categories"]
): Promise<ICategory[]> {
  try {
    const categories: ICategory[] = await database.getCollectionRecords(
      "categories",
      sortType
    );
    return categories;
  } catch (error) {
    console.error("Ops! Não foi possível acessar categorias");

    return [];
  }
}

export async function getCategoryRecordsByCollection<
  C extends CategoriesTitleMap
>(collection: C) {
  try {
    return await database.getCollectionRecords(collection, "alph");
  } catch (error) {
    console.error("Ops! Ocorreu um erro.");
    return [];
  }
}
