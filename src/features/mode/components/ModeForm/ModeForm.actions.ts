"use server";

import { modeServices } from "@/domains/mode";
import { redirect } from "next/navigation";

export async function submitMode(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;

  const newMode = {
    label,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await modeServices.create(newMode);
  redirect(`/atributos/modos`);
}
