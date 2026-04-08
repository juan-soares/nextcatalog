"use server";

import { genreServices } from "@/domains/genre";
import { redirect } from "next/navigation";

export async function submitMode(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;

  const newGenre = {
    label,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await genreServices.create(newGenre);
  redirect(`/atributos/generos`);
}
