import { LanguageEntity } from "../domain/language.entity";
import { languageRepository } from "../infra/language.repository";
import { languageMapper } from "./language.mapper";

export const languageServices = {
  async listAllLanguages(): Promise<LanguageEntity[]> {
    const languagesDoc = await languageRepository.findAll();
    return languagesDoc.map(languageMapper.toLanguageEntity);
  },
};
