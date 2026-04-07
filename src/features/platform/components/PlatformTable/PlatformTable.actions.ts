import { platformServices } from "@/domains/platform";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await platformServices.remove(id);
  redirect("/atributos/plataformas");
}
