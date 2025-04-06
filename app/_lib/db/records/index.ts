import { ICategory, IDatabase, IRecord } from "../../interfaces";
import connectToDatabase from "../connection";

export async function getAllRecords(): Promise<IRecord[]> {
  try {
    const db: IDatabase | null = await connectToDatabase();

    if (!db) throw new Error("Erro");

    let allRecords = [];

    console.log(allRecords);

    return allRecords;
  } catch (error) {
    return [];
  }
}
