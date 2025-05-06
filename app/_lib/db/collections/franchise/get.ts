import { ICollectionInfo, IFranchise } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getAllFranchises(): Promise<IFranchise[]> {
  try {
    const db = await connectToDatabase();

    return db["franchises"].sort((a: ICollectionInfo, b: ICollectionInfo) =>
      a.title.localeCompare(b.title)
    );
  } catch (error) {
    return [];
  }
}
