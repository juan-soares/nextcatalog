import Link from "next/link";
import { getAllCollectionsInfo } from "@/app/_lib/db/collections";

export async function CollectionOptions() {
  const collectionsInfo = await getAllCollectionsInfo();

  return (
    <main>
      <h2>Novo Registro</h2>

      <form>
        <ul>
          {collectionsInfo.map(({ id, slug, title }) => (
            <li key={id}>
              <Link href={`/novo-registro${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </form>
    </main>
  );
}
