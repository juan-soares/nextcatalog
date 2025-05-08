import { IAnime } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getAnimesByPage(page = 1, limit = 15): Promise<IAnime[]> {
  try {
    const db = await connectToDatabase();
    const animes: IAnime[] = db["animes"].slice(page - 1, limit * page);

    return animes;
  } catch (error) {
    console.log("Algo deu errado ao consultar Animes.");
    return [];
  }
}
