import { connectMongo } from "@/database/mongodb/connection";
import {
  Language,
  LanguageDTO,
  LanguageFindOptions,
  LanguageModel,
  languageRepository,
  LanguageServiceFilters,
} from "@/domains/language";

export const languageServices = {
  async listLanguages(
    filters?: Partial<LanguageServiceFilters>,
  ): Promise<LanguageDTO[]> {
    const options: LanguageFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await languageRepository.findAll(options);
  },

  async create(newLanguage: Language): Promise<void> {
    await connectMongo();

    const language = new LanguageModel({
      label: newLanguage.label,
      code: newLanguage.code,
    });

    await language.save();

    console.log("Salvo com sucesso!");
  },
};
