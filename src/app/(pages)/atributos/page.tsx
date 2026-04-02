import { AttributeTable } from "@/features/attributes";

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function AttributesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const attributes = [];

  return (
    <div>
      {q}
      <AttributeTable attributes={q} />
    </div>
  );
}
