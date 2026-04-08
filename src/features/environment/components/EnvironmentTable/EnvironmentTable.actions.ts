import { environmentServices } from "@/domains/environment";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await environmentServices.remove(id);
  redirect("/atributos/ambientacoes");
}
