import { attributeServices } from "@/domains/attribute";
import { AttributeForm } from "@/features/attributes/components/AttributeForm";

interface Props {
  params: { attributeSlug: string };
}

export default async function NewAttributePage({ params }: Props) {
  const { attributeSlug } = await params;
  const title = await attributeServices.getAttributeTitleBySlug(attributeSlug);

  if (!title)
    return <main>O atributo que você estã procurando não existe.</main>;

  return (
    <main>
      <h1>Novo Atributo: {title}.</h1>
      <AttributeForm slug={title} />
    </main>
  );
}
