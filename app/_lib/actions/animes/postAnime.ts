"use server";

import { IAnime, ISeason } from "@/app/_data/data.types";
import { getBoolean, getString, getStringArray, slugfy } from "../../utils";
import { db } from "@/app/_data/db";

export async function postAnime(formData: FormData) {
  const title = getString(formData, "title");
  const translatedTitle = getString(formData, "translatedTitle");
  const releaseDateRaw = getString(formData, "releaseDate");
  const synopsis = getString(formData, "synopsis");
  const cover = getString(formData, "cover");
  const trailer = getString(formData, "trailer");
  const images = getStringArray(formData, "images");
  const files = getStringArray(formData, "files");
  const themesId = getStringArray(formData, "themesId");
  const franchisesId = getStringArray(formData, "franchisesId");
  const seasonIsAcquired = getBoolean(formData, "seasonIsAquired");
  const seasonIsFinished = getBoolean(formData, "seasonIsFinished");
  const seasonSubcategoryId = getString(formData, "seasonSubcategoryId");

  const seasonTitle = getString(formData, "seasonTitle");
  const seasonTranslatedTitle = getString(formData, "seasonTranslatedTitle");

  const path = `/public/database/animes/${slugfy(title)}`;

  let newSeason: ISeason = {
    _id: new Date().toString(),
    number: 1,
    title: seasonTitle,
    translatedTitle: seasonTranslatedTitle,
    synopsis,
    cover: `${path}/images/cover.png`,
    trailer: `${path}/images/trailer.mp4`,
    subcategoryId: seasonSubcategoryId,
    episodes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  let newAnime: IAnime = {
    _id: new Date().toString(),
    title,
    translatedTitle,
    releaseDate: new Date(releaseDateRaw),
    slug: slugfy("/animes/" + title),
    synopsis,
    cover: newSeason.cover,
    trailer: newSeason.trailer,
    images: images.map((index) => `${path}/files/img-${index}`),
    categoryId: "cat001",
    themesId: themesId.map((themeId) => themeId),
    franchisesId: franchisesId.map((franchiseId) => franchiseId),
    acquired: seasonIsAcquired,
    finished: seasonIsFinished,
    seasons: [newSeason],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    await db.collection("animes").post(newAnime);
  } catch (error) {
    console.error("Erro ao salvar novo anime:" + error);
    return { error: "Erro desconhecido." };
  }
}
