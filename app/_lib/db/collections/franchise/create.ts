"use server";

import { slugfy } from "@/app/_lib/utils";
import { redirect } from "next/navigation";
import { updateDatabase } from "../../connection";
import { uploadImage } from "@/app/_lib/utils/upload";

export async function createFranchise(formData: FormData) {
  const formTitle = formData.get("title")?.toString();
  const formImg = formData.get("logo") as File;

  if (!formTitle || !formImg) return console.log("Dados faltando.");

  const newFranchise = {
    title: formTitle,
    slug: `/franquias${slugfy(formTitle)}`,
    logo: `/data/franchises${slugfy(formTitle)}-logo.png`,
  };

  try {
    await updateDatabase(newFranchise, "franchises");
    await uploadImage(formImg, "franchises", slugfy(formTitle));
    redirect("/");
  } catch (error) {
    return console.log("Deu errado! " + error);
  }
}
