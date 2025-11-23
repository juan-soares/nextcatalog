"use server";

import { db } from "@/src/_data/db";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const user = await db
    .collection("users")
    .find({ query: { fieldsToSearch: ["email"], termsToSearch: [email] } });

  if (!user[0] || user[0].password !== password)
    throw new Error("Usuário ou senha não encontrado.");

  (await cookies()).set({
    name: "session",
    value: user[0]._id.toString(),
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });

  revalidatePath("/", "layout");

  redirect("/profile");
}
