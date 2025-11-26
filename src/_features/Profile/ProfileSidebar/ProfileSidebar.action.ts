import { db } from "@/src/_data/db";
import { ISession } from "./ProfileSidebar.types";

export async function getSessions(): Promise<ISession[]> {
  try {
    const sessions = await db.collection("sessions").find({ sortBy: "alph" });

    return sessions;
  } catch (error) {
    console.error("Erro ao consultar sessão:" + error);
    return [];
  }
}
