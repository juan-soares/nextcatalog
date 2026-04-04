import { attributeServices } from "@/domains/attribute";
import { AttributeTable } from "@/features/attributes";

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function AttributesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const attributeRecords = await attributeServices.listAttributeDataBySlug(q);

  return (
    <div>
      {q && <AttributeTable slug={q} attributeRecords={attributeRecords} />}
    </div>
  );
}
