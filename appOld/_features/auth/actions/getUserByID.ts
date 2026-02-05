import { db } from "@/app/_data/db";
import { IUserInfo } from "../types";

export async function getUserByID(id: string): Promise<IUserInfo | null> {
  const userInfo = await db
    .collection("users")
    .find({ query: { fieldsToSearch: ["_id"], termsToSearch: [id] } });

  if (!userInfo) return null;

  const { _id, nickname, avatar } = userInfo[0];

  return { _id, nickname, avatar };
}
