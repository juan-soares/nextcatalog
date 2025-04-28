import { IFormType } from "@/app/_lib/interfaces/formType";
import connectToDatabase from "../../connection";

export async function getFormTypes(): Promise<IFormType[]> {
  const db = await connectToDatabase();

  return db["formTypes"];
}
