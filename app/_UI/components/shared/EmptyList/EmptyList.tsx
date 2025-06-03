import Link from "next/link";

export function EmptyList({ slug }: { slug: string }) {
  return (
    <p>
      Sem resultados por aqui. Que tal{" "}
      <Link href={`/novo-registro/${slug}`}>adicionar</Link>?
    </p>
  );
}
