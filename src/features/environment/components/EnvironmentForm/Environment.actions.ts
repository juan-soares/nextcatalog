"use server";

import { environmentServices } from "@/domains/environment";
import { redirect } from "next/navigation";

export async function submitEnvironment(formData: FormData): Promise<void> {
  const label = formData.get("label") as string;

  const newEnvironment = {
    label,
  };

  if (!label) {
    throw new Error("Label é obrigatório");
  }

  await environmentServices.create(newEnvironment);
  redirect(`/atributos/ambientacoes`);
}
