import { AttributeFindOptions, attributeRepository } from "@/domains/attribute";
import { AttributeLink, AttributeTableInfo } from "@/features/attributes";
import { attributeMappers } from "./attribute.mappers";

export const attributeServices = {
  async listAttributeLinks(): Promise<AttributeLink[]> {
    const options: AttributeFindOptions = {
      sort: { label: "asc" },
    };
    const attributes = await attributeRepository.findAll(options);
    return attributes.map(attributeMappers.toAttributeLink);
  },

  async listAttributesInfoBySlug(slug: string): Promise<AttributeTableInfo> {
    const attribute = await attributeRepository.finOne(slug);
    return attributeMappers.toAttributeTableInfo(attribute, );
  },
};
