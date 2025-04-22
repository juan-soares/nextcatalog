import { IFranchise } from "../../interfaces";
import connectToDatabase, { updateDatabase } from "../connection";

export async function getAllFranchises(): Promise<IFranchise[]> {
  const db = await connectToDatabase();
  if (!db) throw new Error("Database não conectado.");

  const franchises: IFranchise[] = db["franchises"];

  return franchises;
}

export async function createFranchise(formValues: {
  title: string;
  logo: string;
  slug: string;
}) {
  updateDatabase(formValues, "franchises");
}
