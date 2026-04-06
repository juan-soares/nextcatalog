"use server";

import { resolutionServices } from "@/domains/resolution";
import { redirect } from "next/navigation";

export async function submitResolution(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;
  const code = formData.get("code") as string;
  const newResolution = {
    label,
    code,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await resolutionServices.create(newResolution);
  redirect(`/atributos/resolucoes`);
}
