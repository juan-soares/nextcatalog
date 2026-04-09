import { AttributeLink } from "@/features/attribute";
import {
  AttributeData,
  AttributeDocument,
  AttributeDTO,
} from "./attribute.types";
import { AttributeRecord } from "@/features/attribute/components";

export const attributeMappers = {
  toDTO({ _id, label, key, slug }: AttributeDocument): AttributeDTO {
    return {
      id: _id.toString(),
      label,
      key,
      slug,
    };
  },

  toAttributeLink({ id, label, slug }: AttributeDTO): AttributeLink {
    return {
      id: id,
      label,
      href: `/atributos/${slug}`,
    };
  },

  toAttributeRecord({ id, value, code }: AttributeData): AttributeRecord {
    return {
      id,
      value,
      code: code || "",
    };
  },
};
