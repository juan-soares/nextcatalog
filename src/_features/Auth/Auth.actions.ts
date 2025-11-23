"use server";

import { cookies } from "next/headers";
import { IUserInfo } from "./Auth.types";
import { db } from "@/src/_data/db";

export async function getUserSession(): Promise<string | null> {
  const session = (await cookies()).get("session")?.value || null;
  return session;
}

export async function getUserInfo(): Promise<IUserInfo | null> {
  const session = await getUserSession();
  if (!session) return null;

  try {
    const user = await db
      .collection("users")
      .find({ query: { fieldsToSearch: ["_id"], termsToSearch: [session] } });

    const { nickname, avatar } = user[0];

    return { nickname, avatar };
  } catch (error) {
    console.error("Usuário ou senha não encontrado.");
    return null;
  }
}
