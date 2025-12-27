"use server";

import { redirect } from "next/navigation";
import { getSubcategories } from "./global";
import { ISubcategory } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function postNewSubCategory(formData: FormData) {
  const formTitle = formData.get("title");

  if (typeof formTitle !== "string" || !formTitle.trim()) {
    throw new Error("O campo Título é obrigatório");
  }

  const subcategories = await getSubcategories();

  if (subcategories.find(({ _id }) => _id === formTitle))
    return console.error("Titulo já existente.");

  const newSubcategory: ISubcategory = {
    _id: "sub" + subcategories.length,
    title: formTitle,
    translatedTitle: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection("subcategories").post(newSubcategory);

  redirect("/");
}
