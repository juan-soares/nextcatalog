import type { MediaType } from "../domain";
import { mediaTypeRepository } from "../infra";

export async function listMediaTypesUseCase(): Promise<MediaType[]> {
  return await mediaTypeRepository.find();
}
