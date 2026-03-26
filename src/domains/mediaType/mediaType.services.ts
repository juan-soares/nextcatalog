import { MediaType } from "./mediaType.types";
import { mediaTypeRepository } from "./mediaType.repository";

export async function listAllMediaTypes(): Promise<MediaType[]> {
  return await mediaTypeRepository.findAll();
}
