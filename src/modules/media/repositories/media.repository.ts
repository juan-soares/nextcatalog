import { connectMongoDB } from "@/infra/database/mongodb";
import { MediaModel } from "../models/media.model";

//
// 📌 Buscar todas as mídias
//
export async function getAllMedia() {
  await connectMongoDB();
  return MediaModel.find().sort({ createdAt: -1 }).lean();
}

//
// 📌 Buscar por categoria
//
export async function getMediaByCategory(category: string) {
  await connectMongoDB();
  return MediaModel.find({ category }).sort({ createdAt: -1 }).lean();
}

//
// 📌 Buscar por id (detalhe)
//
export async function getMediaById(id: string) {
  await connectMongoDB();
  return MediaModel.findById(id).lean();
}

//
// 📌 Criar mídia (admin)
//
export async function createMedia(data: any) {
  await connectMongoDB();
  return MediaModel.create(data);
}

//
// 📌 Atualizar mídia (admin)
//
export async function updateMedia(id: string, data: any) {
  await connectMongoDB();
  return MediaModel.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();
}

//
// 📌 Deletar mídia (admin)
//
export async function deleteMedia(id: string) {
  await connectMongoDB();
  return MediaModel.findByIdAndDelete(id);
}
