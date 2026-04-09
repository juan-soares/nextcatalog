import {
  MediaType,
  MediaTypeDTO,
  MediaTypeFindOptions,
  MediaTypeModel,
  mediaTypeRepository,
  MediaTypeServiceFilters,
} from "@/domains/mediaType";

export const mediaTypeServices = {
  async listAll(
    filters?: Partial<MediaTypeServiceFilters>,
  ): Promise<MediaTypeDTO[]> {
    const options: MediaTypeFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await mediaTypeRepository.findAll(options);
  },

  async create(newMediaType: MediaType): Promise<void> {
    const mediaType = new MediaTypeModel({
      label: newMediaType.label,
      slug: newMediaType.slug,
    });

    await mediaType.save();
  },

  async remove(mediaTypeId: string): Promise<void> {
    await mediaTypeRepository.findByIdAndDelete(mediaTypeId);
  },
};
