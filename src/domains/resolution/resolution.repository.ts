import { connectMongo } from "@/database/mongodb/connection";
import {
  Resolution,
  ResolutionDocument,
  ResolutionDTO,
  ResolutionFindOptions,
  resolutionMappers,
  ResolutionModel,
  ResolutionServiceSort,
} from "@/domains/resolution";

export const resolutionRepository = {
  async findAll(options: ResolutionFindOptions = {}): Promise<ResolutionDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as ResolutionServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: ResolutionDocument[] = await ResolutionModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(resolutionMappers.toDTO);
  },

  async create(data: Resolution): Promise<ResolutionDTO> {
    await connectMongo();
    const doc = await ResolutionModel.create(data);
    return resolutionMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await ResolutionModel.findByIdAndDelete(id);
  },
};
