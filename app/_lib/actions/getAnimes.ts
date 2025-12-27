import { IAnime } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getAnimes(): Promise<IAnime[]> {
  try {
    const franchises: IAnime[] = await db
      .collection("animes")
      .find({ sortBy: "alph" });
    return franchises;
  } catch (error) {
    console.log("Erro em getAnimes:" + error);
    return [];
  }
}
