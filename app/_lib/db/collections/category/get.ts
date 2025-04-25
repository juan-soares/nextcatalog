import { ICategory } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getAllCategories(): Promise<ICategory[]> {
  try {
    const db = await connectToDatabase();

    return db["categories"].sort((a: ICategory, b: ICategory) =>
      a.title.localeCompare(b.title)
    );
  } catch (error) {
    return [];
  }
}
