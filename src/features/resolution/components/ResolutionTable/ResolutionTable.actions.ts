import { resolutionServices } from "@/domains/resolution";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await resolutionServices.remove(id);
  redirect("/atributos/resolucoes");
}
