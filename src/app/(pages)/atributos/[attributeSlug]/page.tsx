import { GenreTable } from "@/features/genre";
import { LanguageTable } from "@/features/language";
import { ModeTable } from "@/features/mode";
import { PlatformTable } from "@/features/platform";
import { ResolutionTable } from "@/features/resolution";
import { ThemeTable } from "@/features/theme";

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

    case "plataformas":
      return <PlatformTable />;

    case "modos":
      return <ModeTable />;

    case "generos":
      return <GenreTable />;

    case "temas":
      return <ThemeTable />;

    default:
      return <p>Atributo inexistente.</p>;
  }
}
