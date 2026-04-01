import { connectMongo } from "@/database/mongodb/connection";
import { FindAllOptions } from "@/database/types";
import {
  Language,
  LanguageDocument,
  LanguageDTO,
  languageMappers,
  LanguageModel,
} from "@/domains/language";

export const languageRepository = {
  async findAll(
    options: FindAllOptions<LanguageDocument> = {},
  ): Promise<LanguageDTO[]> {
    const { filter = {}, sort = { label: 1 }, limit = 5 } = options;

    await connectMongo();
    const doc: LanguageDocument[] = await LanguageModel.find(filter)
      .sort(sort)
      .limit(limit)
      .lean()
      .exec();
    return doc.map(languageMappers.toDTO);
  },

  async create(data: Language): Promise<LanguageDTO> {
    await connectMongo();
    const doc = await LanguageModel.create(data);
    return languageMappers.toDTO(doc);
  },
};
