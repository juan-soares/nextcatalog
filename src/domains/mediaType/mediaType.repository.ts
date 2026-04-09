import { connectMongo } from "@/database/mongodb/connection";
import {
  MediaType,
  MediaTypeDocument,
  MediaTypeDTO,
  MediaTypeFindOptions,
  MediaTypeModel,
  MediaTypeServiceSort,
  mediaTypeMappers,
} from "@/domains/mediaType";

export const mediaTypeRepository = {
  async findAll(options: MediaTypeFindOptions = {}): Promise<MediaTypeDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as MediaTypeServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: MediaTypeDocument[] = await MediaTypeModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(mediaTypeMappers.toDTO);
  },

  async create(data: MediaType): Promise<MediaTypeDTO> {
    await connectMongo();
    const doc = await MediaTypeModel.create(data);
    return mediaTypeMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await MediaTypeModel.findByIdAndDelete(id);
  },
};
