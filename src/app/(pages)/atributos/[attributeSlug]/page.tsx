import { LanguageTable } from "@/features/language";
import { ResolutionTable } from "@/features/resolution";

interface Props {
  params: { attributeSlug: string };
}

export default async function AttributePage({ params }: Props) {
  const { attributeSlug } = await params;

  switch (attributeSlug) {
    case "idiomas":
      return <LanguageTable />;

    case "resolucoes":
      return <ResolutionTable />;

    default:
      return <p>Atributo inexistente.</p>;
  }
}
