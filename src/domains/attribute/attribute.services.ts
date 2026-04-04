import {
  AttributeFindOptions,
  attributeRepository,
  attributeMappers,
} from "@/domains/attribute";
import { AttributeLink, AttributeRecord } from "@/features/attributes";
import { languageRepository } from "../language";

export const attributeServices = {
  async listAttributeLinks(): Promise<AttributeLink[]> {
    const options: AttributeFindOptions = {
      sort: { label: "asc" },
    };
    const attributes = await attributeRepository.findAll(options);
    return attributes.map(attributeMappers.toAttributeLink);
  },

  async listAttributeDataBySlug(
    slug: string,
  ): Promise<AttributeRecord[] | null> {
    switch (slug) {
      case "idiomas": {
        const languages = await languageRepository.findAll();

        return languages.map(({ id, label, code }) => ({
          id,
          value: label,
          code: code || "",
        }));
      }

      default:
        return null;
    }
  },
};
