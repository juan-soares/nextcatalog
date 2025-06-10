import { Forms } from "@/app/_UI/components/NewRecordPage";
import { getCategoryBySlug } from "@/app/_lib/services";
import Link from "next/link";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function NovoRegistroPage({ params }: IProps) {
  const { category } = await params;
  const categoryInfo = await getCategoryBySlug("/" + category);

  if (!categoryInfo)
    return (
      <p>
        Ops! Algo deu errado. <Link href="/">Voltar?</Link>
      </p>
    );

  const { collection } = categoryInfo;

  return (
    <main>
      <Forms categoryCollection={collection} />
    </main>
  );
}
