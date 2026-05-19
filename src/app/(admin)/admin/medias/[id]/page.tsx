"use server";

import { requireAdmin } from "@/features/auth";
import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "@/modules/media";
import { redirect } from "next/navigation";

export async function updateMedia(formData: FormData) {
  await requireAdmin();

  await connectMongoDB();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const cover = formData.get("cover") as string;

  await MediaModel.findByIdAndUpdate(id, {
    title,
    category,
    cover,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  });

  redirect(`/admin/media/${id}`);
}

export default async function EditMediaPage({ params }: any) {
  const media = await MediaModel.findById(params.id).lean();

  return (
    <main>
      <h1>Editar mídia</h1>

      <MediaForm action={updateMedia} media={media} />
    </main>
  );
}
