//
// 📌 LISTAR mídias (com filtro opcional por categoria)

import {
  getAllMedia,
  getMediaByCategory,
} from "../repositories/media.repository";

//
export async function listMedia(category?: string) {
  if (category) {
    return getMediaByCategory(category);
  }

  return getAllMedia();
}
