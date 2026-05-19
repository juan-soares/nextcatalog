import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "../models";
import { requireAdmin } from "@/features/auth";
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
  redirect("/admin/medias");
}
