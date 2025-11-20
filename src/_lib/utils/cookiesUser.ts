"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function currentUser() {
  const cookieStore = await cookies();
  const raw = cookieStore.get("session")?.value;

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function logout() {
  const confirm = window.confirm("Oi");
  const cookieStore = await cookies();

  cookieStore.set("session", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });

  redirect("/login");
}
