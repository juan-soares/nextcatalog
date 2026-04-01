import { AttributeLink } from "@/features/attributes";
import { AttributeDocument, AttributeDTO } from "./attribute.types";

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
      href: `/atributos?q=${slug}`,
    };
  },
};
