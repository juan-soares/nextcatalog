import { getMediaById } from "../repositories/media.repository";

export async function getMedia(id: string) {
  return getMediaById(id);
}
