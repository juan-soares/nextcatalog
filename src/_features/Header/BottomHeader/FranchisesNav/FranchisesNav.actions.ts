import { db } from "@/src/_data/db";
import { IFranchiseLink } from "./FranchisesNav.types";

export async function getFranchises(): Promise<IFranchiseLink[]> {
  try {
    const franchises = await db
      .collection("franchises")
      .find({ sortBy: "alph" });

    return franchises;
  } catch (error) {
    console.error("Erro ao consultar franchises:" + error);
    return [];
  }
}
