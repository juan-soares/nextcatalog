import { connectMongo } from "@/database/mongodb/connection";
import {
  Platform,
  PlatformDocument,
  PlatformDTO,
  PlatformFindOptions,
  platformMappers,
  PlatformModel,
  PlatformServiceSort,
} from "@/domains/platform";

export const platformRepository = {
  async findAll(options: PlatformFindOptions = {}): Promise<PlatformDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as PlatformServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: PlatformDocument[] = await PlatformModel
      .find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(platformMappers.toDTO);
  },

  async create(data: Platform): Promise<PlatformDTO> {
    await connectMongo();
    const doc = await PlatformModel.create(data);
    return platformMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await PlatformModel.findByIdAndDelete(id);
  },
};
