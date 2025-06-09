import Link from "next/link";

export function Sortbar({ categorySlug }: { categorySlug: string }) {
  return (
    <div>
      <button>A-Z</button>
      <button>Lançamento</button>
      <button>Recente</button>
      <Link href={`/novo-registro/${categorySlug}`}>
        <button>+</button>
      </Link>
    </div>
  );
}
