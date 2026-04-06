"use server";

import { themeServices } from "@/domains/theme";
import { redirect } from "next/navigation";

export async function submitTheme(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;

  const newTheme = {
    label,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await themeServices.create(newTheme);
  redirect(`/atributos/temas`);
}
