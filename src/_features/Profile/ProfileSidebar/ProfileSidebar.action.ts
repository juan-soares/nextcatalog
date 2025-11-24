import { db } from "@/src/_data/db";
import { ISession } from "./ProfileSidebar.types";

export async function getSessions(): Promise<ISession[]> {
  try {
    const session = await db.collection("")
  } catch (error) {
    console.error("Erro ao consultar sessão:" + error);
    return [];
  }
}
