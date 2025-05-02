"use server";

import { writeFile } from "node:fs/promises";

export async function uploadImage(
  imgFile: File,
  collection: string,
  imgName: string
) {
  const bytes = await imgFile.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const path = `public/data/${collection}/${imgName}`;

  try {
    await writeFile(path, buffer);
    console.log("Imagem salva com sucesso!");
  } catch (error) {
    console.error("Error saving file:", error);
    return { error: "Failed to save image" };
  }
}
