import { MediaTypeRepository } from "../infra";

export async function listActiveMediaTypes() {
  const mediaTypes = await MediaTypeRepository.list();

  return mediaTypes.filter((m) => m.isActive);
}
