"use server";

import { redirect } from "next/navigation";

import { IAnime } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";
import { getAnimes } from "./animes";

export async function postNewAnime(formData: FormData) {
  const formTitle = formData.get("title");

  if (typeof formTitle !== "string" || !formTitle.trim()) {
    throw new Error("O campo Título é obrigatório");
  }

  const animes = await getAnimes();

  if (animes.find(({ _id }) => _id === formTitle))
    return console.error("Titulo já existente.");

  const newAnime: IAnime = {
    _id: `anim${animes.length + 1}`,
    title: formTitle,
    slug: "",
    collection: "animes",
    translatedTitle: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection("animes").post(newAnime);

  redirect("/");
}
