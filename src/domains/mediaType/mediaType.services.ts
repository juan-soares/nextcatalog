import { mediaTypeRepository } from "./mediaType.repository";
import { MediaType } from "./mediaType.types";

export async function listAllMediaTypes(): Promise<MediaType[]> {
  return await mediaTypeRepository.findAll();
}
