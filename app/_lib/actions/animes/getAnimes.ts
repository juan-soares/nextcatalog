import { IAnime } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getAnimes(): Promise<IAnime[]> {
  try {
    const animes = await db.collection("animes").find({ sortBy: "alph" });
    return animes;
  } catch (error) {
    console.error("Erro ao consultar Animes" + error);
    return [];
  }
}
