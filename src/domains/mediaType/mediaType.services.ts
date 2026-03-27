import { MediaType } from "./mediaType.types";
import { mediaTypeRepository } from "./mediaType.repository";

export const mediaTypeServices = {
  async listAllMediaTypes(): Promise<MediaType[]> {
    return await mediaTypeRepository.findAll();
  },

  async listMediaTypeBySlug(slugToSearch: string): Promise<MediaType> {
    const results = await mediaTypeRepository.findAll({
      filter: { slug: slugToSearch },
    });

    return results[0];
  },
};
