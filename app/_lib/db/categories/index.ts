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
