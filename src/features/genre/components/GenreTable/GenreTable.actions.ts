import { genreServices } from "@/domains/genre";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await genreServices.remove(id);
  redirect("/atributos/generos");
}
