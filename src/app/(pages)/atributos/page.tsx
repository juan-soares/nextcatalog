import { attributeServices } from "@/domains/attribute";
import { AttributeTable } from "@/features/attributes";
import { AttributeTableInfo } from "@/features/attributes/components/AttributeTable/AttributeTable.types";

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function AttributesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const attributesInfo = await attributeServices.listAttributesInfoBySlug(q);

  const attributes: AttributeTableInfo = {
    name: "language",
    label: "Idiomas",
    columns: [
      { key: "valor", label: "Idioma" },
      { key: "codigo", label: "Código" },
    ],
    values: [
      { valor: "Português", codigo: "pt-br" },
      { valor: "Inglês (EUA)", codigo: "en-us" },
    ],
  };

  return (
    <div>
      {q}
      <AttributeTable attributeTableInfo={attributes} />
    </div>
  );
}
