import { connectMongo } from "@/database/mongodb/connection";
import {
  Environment,
  EnvironmentDocument,
  EnvironmentDTO,
  EnvironmentFindOptions,
  environmentMappers,
  EnvironmentModel,
  EnvironmentServiceSort,
} from "@/domains/environment";

export const environmentRepository = {
  async findAll(
    options: EnvironmentFindOptions = {},
  ): Promise<EnvironmentDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as EnvironmentServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: EnvironmentDocument[] = await EnvironmentModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(environmentMappers.toDTO);
  },

  async create(data: Environment): Promise<EnvironmentDTO> {
    await connectMongo();
    const doc = await EnvironmentModel.create(data);
    return environmentMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await EnvironmentModel.findByIdAndDelete(id);
  },
};
