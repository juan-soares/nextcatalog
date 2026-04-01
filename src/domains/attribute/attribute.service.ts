import { attributeRepository } from "@/domains/attribute";
import { AttributeLink } from "@/features/attributes";
import { attributeMappers } from "./attribute.mappers";

export const attributeServices = {
  async listAttributeLinks(): Promise<AttributeLink[]> {
    const attributes = await attributeRepository.findAll();
    return attributes.map(attributeMappers.toAttributeLink);
  },
};
