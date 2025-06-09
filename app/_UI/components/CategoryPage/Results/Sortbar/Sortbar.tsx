import Link from "next/link";

export function Sortbar() {
  return (
    <div>
      <button>A-Z</button>
      <button>Lançamento</button>
      <button>Recente</button>
      <Link href={`/novo-registro/`}>
        <button>+</button>
      </Link>
    </div>
  );
}
