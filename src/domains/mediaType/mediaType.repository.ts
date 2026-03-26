import { MediaType } from "./mediaType.types";
import { MediaTypeModel } from "./mediaType.model";
import { mediaTypeMapper } from "./mediaType.mapper";

export const mediaTypeRepository = {
  async findAll(): Promise<MediaType[]> {
    const mediaTypesDoc = await MediaTypeModel.find().lean();
    
    return mediaTypesDoc.map(mediaTypeMapper.toMediaTypeEntity);
  },
};
