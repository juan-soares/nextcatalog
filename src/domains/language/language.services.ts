import {
  LanguageDTO,
  LanguageFindOptions,
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
};
