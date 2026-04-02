import { connectMongo } from "@/database/mongodb/connection";
import {
  AttributeModel,
  AttributeDocument,
  AttributeDTO,
  attributeMappers,
  AttributeFindOptions,
  AttributeServiceSort,
} from "@/domains/attribute";

export const attributeRepository = {
  async findAll(options: AttributeFindOptions = {}): Promise<AttributeDTO[]> {
    const { filters = {}, sort = { label: "asc" }, limit = 100 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as AttributeServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const docs: AttributeDocument[] = await AttributeModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return docs.map(attributeMappers.toDTO);
  },
};
