import { MediaModel } from "../models/media.model";

//
// 📌 Buscar com query genérica (base de tudo)
//
export async function findMedia(query: any) {
  return MediaModel.find(query).sort({ createdAt: -1 }).lean();
}

//
// 📌 Buscar por ID
//
export async function findMediaById(id: string) {
  return MediaModel.findById(id).lean();
}

//
// 📌 Criar mídia
//
export async function insertMedia(data: any) {
  return MediaModel.create(data);
}

//
// 📌 Atualizar mídia
//
export async function updateMediaById(id: string, data: any) {
  return MediaModel.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();
}

//
// 📌 Deletar mídia
//
export async function deleteMediaById(id: string) {
  return MediaModel.findByIdAndDelete(id);
}
