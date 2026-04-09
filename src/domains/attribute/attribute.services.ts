import {
  AttributeFindOptions,
  attributeRepository,
  attributeMappers,
} from "@/domains/attribute";
import { AttributeLink, AttributeRecord } from "@/features/attribute";
import { languageRepository } from "../language";

export const attributeServices = {
  async listAttributeLinks(): Promise<AttributeLink[]> {
    const options: AttributeFindOptions = {
      sort: { label: "asc" },
    };
    const attributes = await attributeRepository.findAll(options);
    return attributes.map(attributeMappers.toAttributeLink);
  },

  async getAttributeTitleBySlug(slugToSearch: string): Promise<string | null> {
    const attribute = await attributeRepository.findOne({ slug: slugToSearch });
    if (!attribute) return null;

    return attribute.label;
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
