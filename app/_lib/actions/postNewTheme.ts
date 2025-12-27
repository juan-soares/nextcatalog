"use server";

import { redirect } from "next/navigation";
import { getThemes } from "./global";
import { ITheme } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function postNewTheme(formData: FormData) {
  const formTitle = formData.get("title");

  if (typeof formTitle !== "string" || !formTitle.trim()) {
    throw new Error("O campo Título é obrigatório");
  }

  const themes = await getThemes();

  if (themes.find(({ _id }) => _id === formTitle))
    return console.error("Titulo já existente.");

  const newTheme: ITheme = {
    _id: `the${themes.length + 1}`,
    title: formTitle,
    translatedTitle: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection("themes").post(newTheme);

  redirect("/");
}
