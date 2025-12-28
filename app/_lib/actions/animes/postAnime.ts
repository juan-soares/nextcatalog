"use server";
import { join } from "path";
import { IAnime, ISeason } from "@/app/_data/data.types";
import {
  getBoolean,
  getFile,
  getString,
  getStringArray,
  slugfy,
} from "../../utils";
import { db } from "@/app/_data/db";
import { redirect } from "next/navigation";
import fs from "fs/promises";

export async function postAnime(formData: FormData) {
  const title = getString(formData, "title");
  const translatedTitle = getString(formData, "translatedTitle");
  const releaseDateRaw = getString(formData, "releaseDate");
  const synopsis = getString(formData, "synopsis");
  const cover = getFile(formData, "cover");
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

  const alreadyExists = await db
    .collection("animes")
    .find({ query: { fieldsToSearch: ["title"], termsToSearch: [title] } });

  if (alreadyExists.length) throw new Error("Registro já existente.");
  if (!cover) throw new Error("Imagem de capa é obrigatória.");

  const path = `/public/database/animes/${slugfy(title)}`;

  let newSeason: ISeason = {
    _id: new Date().toISOString(),
    number: 1,
    title: seasonTitle,
    translatedTitle: seasonTranslatedTitle,
    releaseDate: new Date(releaseDateRaw),
    synopsis,
    cover: `${path}/images/cover.png`,
    trailer: `${path}/images/trailer.mp4`,
    subcategoryId: seasonSubcategoryId,
    episodes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  let newAnime: IAnime = {
    _id: new Date().toISOString(),
    title,
    translatedTitle,
    releaseDate: newSeason.releaseDate,
    slug: "/animes/" + slugfy(title),
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

    const basePath = join(
      process.cwd(),
      "public",
      "database",
      "animes",
      newAnime.slug
    );

    await fs.mkdir(join(basePath, "images"), { recursive: true });
    await fs.mkdir(join(basePath, "files"), { recursive: true });

    const arrayBuffer = await cover.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await fs.writeFile(join(basePath, "images", "cover.jpg"), uint8Array);
  } catch (error) {
    console.error("Erro ao salvar novo anime:" + error);
  }

  redirect(newAnime.slug);
}
