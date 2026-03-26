import { MediaType, MediaTypeDocument } from "./mediaType.types";

export const mediaTypeMapper = {
  toMediaTypeEntity(mediaTypeDocument: MediaTypeDocument): MediaType {
    return {
      id: mediaTypeDocument._id.toString(),
      label: mediaTypeDocument.label,
      slug: mediaTypeDocument.slug,
    };
  },
};
