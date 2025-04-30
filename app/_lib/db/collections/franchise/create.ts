"use server";

import { slugfy } from "@/app/_lib/utils";

export async function createFranchise(formData: FormData) {
  const formTitle = formData.get("title")?.toString();

  if (!formTitle) return console.log("Dados faltando.");

  const newFranchise = {
    title: formTitle,
    slug: slugfy(formTitle),
  };
}
