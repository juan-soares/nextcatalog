"use server";

import { requireAdmin } from "@/auth/isAdmin";
import { CATEGORY_CONFIG } from "@/config";
import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "@/modules/media/models/media.model";
import { redirect } from "next/navigation";

export async function createMedia(formData: FormData) {
  await requireAdmin();

  await connectMongoDB();

  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const cover = formData.get("cover") as string;

  await MediaModel.create({
    title,
    category,
    cover,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  });
  redirect("/jogos-eletronicos");
}

export default function NewMediaPage() {
  return (
    <main>
      <h1>Criar mídia</h1>

      <MediaForm action={createMedia} />
    </main>
  );
}
