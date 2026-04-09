import { MediaTypeDocument, MediaTypeDTO } from "@/domains/mediaType";

export const mediaTypeMappers = {
  toDTO({ _id, label, slug }: MediaTypeDocument): MediaTypeDTO {
    return {
      id: _id.toString(),
      label,
      slug,
    };
  },
};
