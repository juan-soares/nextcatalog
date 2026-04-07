import { connectMongo } from "@/database/mongodb/connection";
import {
  Mode,
  ModeDocument,
  ModeDTO,
  ModeFindOptions,
  modeMappers,
  ModeModel,
  ModeServiceSort,
} from "@/domains/mode";

export const modeRepository = {
  async findAll(options: ModeFindOptions = {}): Promise<ModeDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as ModeServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: ModeDocument[] = await ModeModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(modeMappers.toDTO);
  },

  async create(data: Mode): Promise<ModeDTO> {
    await connectMongo();
    const doc = await ModeModel.create(data);
    return modeMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await ModeModel.findByIdAndDelete(id);
  },
};
