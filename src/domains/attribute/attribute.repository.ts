import { connectMongo } from "@/database/mongodb/connection";
import {
  AttributeModel,
  AttributeDocument,
  AttributeDTO,
  attributeMappers,
} from "@/domains/attribute";

export const attributeRepository = {
  async findAll(): Promise<AttributeDTO[]> {
    await connectMongo();
    const docs: AttributeDocument[] = await AttributeModel.find({})
      .sort({ label: 1 })
      .lean()
      .exec();

    return docs.map(attributeMappers.toDTO);
  },
};
