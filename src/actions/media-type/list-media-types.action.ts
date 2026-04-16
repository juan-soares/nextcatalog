import { listMediaTypesUseCase, type MediaType } from "@/domains/media-type";

export async function getMediaTypesAction(): Promise<MediaType[]> {
  return await listMediaTypesUseCase();
}
