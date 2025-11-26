import { IDatabase } from "@/src/_data/data.types";
import { db } from "@/src/_data/db";
import { ISection } from "./ProfileMain.types";

export async function getSectionRecords(
  sectionCollection: keyof IDatabase
): Promise<ISection[]> {
  try {
    const sectionRecords = await db.collection(sectionCollection).find({});
    const sections: ISection[] = sectionRecords.map(({ _id, title }) => ({
      _id,
      title,
    }));
    return sections;
  } catch (error) {
    console.error("Erro no getSectionRecords:" + error);
    return [];
  }
}
