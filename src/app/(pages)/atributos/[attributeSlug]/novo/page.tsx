import { LanguageForm } from "@/features/language";
import { PlatformForm } from "@/features/platform";
import { ResolutionForm } from "@/features/resolution";
import { ThemeForm } from "@/features/theme";

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

    case "plataformas":
      return <PlatformForm />;

    case "temas":
      return <ThemeForm />;

    default:
      <p>Atributo não encontrado.</p>;
  }
}
