"use server";

import { slugfy } from "@/app/_lib/utils";
import { redirect } from "next/navigation";
import { updateDatabase } from "../../connection";
import { uploadImage } from "@/app/_lib/utils/upload";

export async function createAnime(formData: FormData) {
  const formTitle = formData.get("title")?.toString();
  const formTranslatedTitle = formData.get("translatedTitle")?.toString();
  const formRelease = formData.get("release")?.toString();
  const formSubcategory = formData.get("subcategory")?.toString();
  const formDirectSequel = formData.get("directSequel")?.toString();
  const formChronologicalSequel = formData
    .get("chronologicalSequel")
    ?.toString();
  const formThemes = formData.getAll("themes");
  const formFranchises = formData.getAll("franchises");
  const formImg = formData.get("logo") as File;

  if (!formTitle || !formRelease || !formSubcategory || !formImg)
    return console.log("Dados faltando.");

  const newAnime = {
    title: formTitle,
    translatedTitle: formTranslatedTitle,
    release: formRelease,
    subcategory: formSubcategory,
    directSequel: formDirectSequel,
    chronologicalSequel: formChronologicalSequel,
    themes: formThemes,
    franchises: formFranchises,
    slug: `/animes${slugfy(formTitle)}`,
    logo: `/data/animes${slugfy(formTitle)}/img/logo.png`,
  };

  console.log(newAnime);

  try {
    //await updateDatabase(newanime, "animes");
    //await uploadImage(formImg, `animes${slugfy(formTitle)}/img`, "logo");
    redirect("/");
  } catch (error) {
    return console.log("Deu errado! " + error);
  }
}
