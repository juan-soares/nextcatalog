"use server";

import { db } from "@/app/_data/db";
import { cookies } from "next/headers";

export async function getUserByCredentials(
  email: string,
  password: string
): Promise<void> {
  const userID = await db.collection("users").find({
    query: {
      fieldsToSearch: ["email", "password"],
      termsToSearch: [email, password],
    },
  });

  if (userID.length === 0) throw new Error("Usuário ou senha inválido.");

  const cookieStore = cookies();
  (await cookieStore).set("session", userID[0]._id, {
    httpOnly: true,
    path: "/profile",
  });
}
