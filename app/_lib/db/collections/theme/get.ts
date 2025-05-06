import { ICollectionInfo, ITheme } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getAllThemes(): Promise<ITheme[]> {
  try {
    const db = await connectToDatabase();

    return db["themes"].sort((a: ICollectionInfo, b: ICollectionInfo) =>
      a.title.localeCompare(b.title)
    );
  } catch (error) {
    return [];
  }
}
