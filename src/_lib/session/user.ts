"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface IUser {
  nickname: string;
  avatar: string;
}

export async function getCurrentUser(): Promise<IUser | null> {
  const cookieStore = cookies();
  const token = (await cookieStore).get("session")?.value;

  if (!token) return null;

  try {
    return JSON.parse(token);
  } catch (error) {
    console.error("Erro ao validar token:", error);
    return null;
  }
}

export async function deleteCurrentUser() {
  (await cookies()).set({
    name: "session",
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  revalidatePath("/");
  redirect("/");
}
