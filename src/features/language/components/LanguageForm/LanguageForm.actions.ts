"use server";

import { languageServices } from "@/domains/language";
import { redirect } from "next/navigation";

export async function submitLanguage(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;
  const code = formData.get("code") as string;
  const newLanguage = {
    label,
    code,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await languageServices.create(newLanguage);
  redirect(`/atributos/idiomas`);
}
