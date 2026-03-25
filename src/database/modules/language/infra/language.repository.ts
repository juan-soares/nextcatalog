import { LanguageDocument, LanguageFilter } from "../types/language.types";
import { FindAllOptions } from "@/types";
import { LanguageModel } from "./language.model";

export const languageRepository = {
  async findAll(
    options?: FindAllOptions<LanguageFilter>,
  ): Promise<LanguageDocument[]> {
    const { filter, sort, limit } = options || {};

    return await LanguageModel.find(filter ?? {})
      .sort(sort ?? { createdAt: -1 })
      .limit(limit ?? 0)
      .lean();
  },
};
