import { db } from "@/app/_data/db";
import { ITheme } from "../types/theme";

export async function getThemes(): Promise<ITheme[]> {
  try {
    const themes: ITheme[] = await db
      .collection("themes")
      .find({ sortBy: "alph" });
    return themes;
  } catch (error) {
    console.error("Erro em getThemes:" + error);
    return [];
  }
}
