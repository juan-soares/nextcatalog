import { attributeServices } from "@/domains/attribute";
import { AttributeTable } from "@/features/attributes";

interface Props {
  params: { attributeSlug: string };
}

export default async function AttributePage({ params }: Props) {
  const { attributeSlug } = await params;

  if (!attributeSlug)
    return (
      <div>
        <p>O atributo que está procurando não existe.</p>
      </div>
    );

  const title = await attributeServices.getAttributeTitleBySlug(attributeSlug);
  const data = await attributeServices.listAttributeDataBySlug(attributeSlug);

  return (
    <div>
      <h1>{title}</h1>
      <AttributeTable slug={attributeSlug} attributeRecords={data} />
    </div>
  );
}
