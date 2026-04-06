import { themeServices } from "@/domains/theme";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await themeServices.remove(id);
  redirect("/atributos/idiomas");
}
