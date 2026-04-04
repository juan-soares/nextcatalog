interface Props {
  slug: string;
}
export default function AttributeForm({ slug }: Props) {
  switch (slug) {
    case "idiomas":
      return <LanguageForm />;

    default:
      return <p>Atributo não encontrado.</p>;
  }
}
