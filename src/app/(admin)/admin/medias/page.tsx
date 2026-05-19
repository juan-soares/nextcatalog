"use server";

import { MediaModel } from "@/modules/media/models/media.model";
import Link from "next/link";

import { redirect } from "next/navigation";
import { connectMongoDB } from "@/infra/database/mongodb";
import { requireAdmin } from "@/features/auth";

export async function deleteMedia(formData: FormData) {
  await requireAdmin();

  await connectMongoDB();

  const id = formData.get("id") as string;

  await MediaModel.findByIdAndDelete(id);

  redirect("/admin/medias");
}

export default async function AdminMediaListPage() {
  await connectMongoDB();

  const medias = await MediaModel.find().sort({ updatedAt: -1 }).lean();

  return (
    <main>
      <h1>Admin - Mídias</h1>

      <Link href="/admin/medias/novo">+ Nova mídia</Link>

      <ul>
        {medias.map((media: any) => (
          <li key={media._id.toString()}>
            <span>{media.title}</span>

            <div>
              <Link href={`/admin/media/${media._id.toString()}`}>Editar</Link>

              <form action={deleteMedia}>
                <input type="hidden" name="id" value={media._id.toString()} />
                <button type="submit">Deletar</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
