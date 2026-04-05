import { languageServices } from "@/domains/language";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await languageServices.remove(id);
  redirect("/atributos/idiomas");
}
