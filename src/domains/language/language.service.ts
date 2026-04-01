import { languageRepository } from "@/database/repositories";
import { FindAllOptions } from "@/database/types";
import {
  LanguageDocument,
  LanguageDTO,
  languageMappers,
} from "@/domains/language";

export const languageServices = {
  async listLanguages(
    options: FindAllOptions<LanguageDocument> = {},
  ): Promise<LanguageDTO[]> {
    const { filter = {}, sort = { label: 1 }, limit = 5 } = options;

    const docs = await languageRepository.findAll(filter);

    return docs.map(languageMappers.toDTO);
  },
};
