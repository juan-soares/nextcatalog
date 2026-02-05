import { db } from "@/app/_data/db";
import { IFranchise } from "../types/global";

export async function getFranchises(): Promise<IFranchise[]> {
  try {
    const franchises: IFranchise[] = await db
      .collection("franchises")
      .find({ sortBy: "alph" });
    return franchises;
  } catch (error) {
    console.log("Erro em getFranchises:" + error);
    return [];
  }
}
