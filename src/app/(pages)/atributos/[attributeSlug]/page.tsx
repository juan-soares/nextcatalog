import { LanguageTable } from "@/features/language";

interface Props {
  params: { attributeSlug: string };
}

export default async function AttributePage({ params }: Props) {
  const { attributeSlug } = await params;

  switch (attributeSlug) {
    case "idiomas":
      return <LanguageTable />;

    default:
      return <p>Atributo inexistente.</p>;
  }
}
