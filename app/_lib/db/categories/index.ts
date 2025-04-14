import { ICategory, IDatabase } from "../../interfaces";
import connectToDatabase from "../connection";

export async function getCategories(): Promise<ICategory[]> {
  try {
    const db: IDatabase | null = await connectToDatabase();

    if (!db) throw new Error("Conexão com o banco de dados falhou.");

    const categoriesCollection: ICategory[] = db["categories"];

    return categoriesCollection;
  } catch (error) {
    return [];
  }
}

export async function getCategoriesBySlug(
  slugToSearch: string
): Promise<ICategory> {
  try {
    const categories = await getCategories();
    const category = categories.find(({ slug }) => slug === "/" + slugToSearch);

    if (!category) throw new Error(`Categoria ${slugToSearch} não encontrada.`);

    return category;
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao encontrar a categoria pelo slug.");
  }
}
