import { MediaType } from "./mediaType.types";
import { MediaTypeModel } from "./mediaType.model";
import { mediaTypeMapper } from "./mediaType.mapper";
import { connectMongo } from "@/database/mongodb/connection";

export const mediaTypeRepository = {
  async findAll(): Promise<MediaType[]> {
    await connectMongo();
    const mediaTypesDoc = await MediaTypeModel.find().lean().exec();

    return mediaTypesDoc.map(mediaTypeMapper.toMediaTypeEntity);
  },
};
