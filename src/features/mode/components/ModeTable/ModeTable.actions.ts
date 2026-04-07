import { modeServices } from "@/domains/mode";
import { redirect } from "next/navigation";

export async function deleteAction(id: string): Promise<void> {
  "use server";
  await modeServices.remove(id);
  redirect("/atributos/modos");
}
