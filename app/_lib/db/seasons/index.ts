import { IDatabase, ISeason } from "../../interfaces";
import connectToDatabase from "../connection";

export async function getSeasonsByTitle(
  titleIDtoSearch: string
): Promise<ISeason[]> {
  try {
    const db: IDatabase | null = await connectToDatabase();

    if (!db) throw new Error("Conexão com o banco de dados falhou.");

    const seasons = db["seasons"].filter(
      ({ title }) => title === titleIDtoSearch
    );

    return seasons;
  } catch (error) {
    return [];
  }
}
