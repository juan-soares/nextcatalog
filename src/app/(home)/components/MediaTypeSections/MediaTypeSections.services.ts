import { mediaTypeRepository } from "@/database/repositories";
import { MediaTypeInfo } from "./MediaTypeSections.type";
import { mediaTypeDocToMediaTypeInfo } from "./MediaTypeSections.mapper";

export async function listMediaTypes(): Promise<MediaTypeInfo[]> {
  const mediaTypes = await mediaTypeRepository.findAll();

  return mediaTypeDocToMediaTypeInfo(mediaTypes);
}
