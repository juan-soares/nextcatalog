import { connectMongo } from "@/database/mongodb/connection";
import {
  Language,
  LanguageDocument,
  LanguageDTO,
  LanguageFindOptions,
  languageMappers,
  LanguageModel,
  LanguageServiceSort,
} from "@/domains/language";

export const languageRepository = {
  async findAll(options: LanguageFindOptions = {}): Promise<LanguageDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as LanguageServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: LanguageDocument[] = await LanguageModel.find(filters)
      .sort(mongoSort)
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
