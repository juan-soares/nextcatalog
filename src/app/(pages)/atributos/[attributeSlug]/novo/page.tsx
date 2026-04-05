import { attributeServices } from "@/domains/attribute";
import { AttributeForm } from "@/features/attributes/components/AttributeForm";
import { LanguageForm } from "@/features/language";

interface Props {
  params: { attributeSlug: string };
}

export default async function NewAttributePage({ params }: Props) {
  const { attributeSlug } = await params;

  switch (attributeSlug) {
    case "idiomas":
      return <LanguageForm />;

    default:
      <p>Atributo não encontrado.</p>;
  }
}
