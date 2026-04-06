import { LanguageForm } from "@/features/language";
import { ResolutionForm } from "@/features/resolution";

interface Props {
  params: { attributeSlug: string };
}

export default async function NewAttributePage({ params }: Props) {
  const { attributeSlug } = await params;

  switch (attributeSlug) {
    case "idiomas":
      return <LanguageForm />;

    case "resolucoes":
      return <ResolutionForm />;

    default:
      <p>Atributo não encontrado.</p>;
  }
}
