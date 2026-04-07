"use server";

import { platformServices } from "@/domains/platform";
import { redirect } from "next/navigation";

export async function submitPlatform(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;
  const code = formData.get("code") as string;
  const newPlatform = {
    label,
    code,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await platformServices.create(newPlatform);
  redirect(`/atributos/plataformas`);
}
