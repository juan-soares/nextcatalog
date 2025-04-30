"use server";

import { slugfy } from "@/app/_lib/utils";
import { redirect } from "next/navigation";
import { updateDatabase } from "../../connection";

export async function createFranchise(formData: FormData) {
  const formTitle = formData.get("title")?.toString();

  if (!formTitle) return console.log("Dados faltando.");

  const newFranchise = {
    title: formTitle,
    slug: slugfy(formTitle),
    logo: "",
  };

  try {
    await updateDatabase(newFranchise, "franchises");
    redirect("/");
  } catch (error) {
    return console.log("Deu errado! " + error);
  }
}
