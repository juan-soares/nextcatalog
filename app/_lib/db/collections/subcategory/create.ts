"use server";

import { slugfy } from "@/app/_lib/utils";
import { redirect } from "next/navigation";
import { updateDatabase } from "../../connection";

export async function createSubcategory(formData: FormData) {
  const formTitle = formData.get("title")?.toString();
  const formCategories = formData.getAll("categories");

  if (!formTitle || !formCategories) return console.log("Dados faltando.");

  const newSubcategory = {
    title: formTitle,
    slug: `/subcategorias${slugfy(formTitle)}`,
    categories: formCategories,
  };

  try {
    await updateDatabase(newSubcategory, "subcategories");

    redirect("/");
  } catch (error) {
    return console.log("Deu errado! " + error);
  }
}
