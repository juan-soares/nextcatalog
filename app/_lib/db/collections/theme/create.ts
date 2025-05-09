"use server";

import { redirect } from "next/navigation";
import { updateDatabase } from "../../connection";

export async function createTheme(formData: FormData) {
  const formTitle = formData.get("title")?.toString();

  if (!formTitle) return console.log("Dados faltando.");

  const newTheme = {
    title: formTitle,
  };

  try {
    await updateDatabase(newTheme, "themes");

    redirect("/profile");
  } catch (error) {
    return console.log("Deu errado! " + error);
  }
}
