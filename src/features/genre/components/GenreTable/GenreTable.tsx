import Link from "next/link";
import { genreServices } from "@/domains/genre";
import { deleteAction } from "./GenreTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function GenreTable() {
  const genres = await genreServices.listAll();
  const columns = ["Valor"]
  const rows = genres.map(({ id, label }) => ({
    id,
    value: label,
  }));

  return (
    <div>
      <h1>Gêneros</h1>

      <AttributeTable rows={rows} columns={columns} removeAction={deleteAction} />

      <Link href="/atributos/generos/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
