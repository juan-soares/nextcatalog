import Link from "next/link";
import { environmentServices } from "@/domains/environment";
import { deleteAction } from "./EnvironmentTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function EnvironmentTable() {
  const environment = await environmentServices.listAll();
  const columns = ["Valores"];
  const rows = environment.map(({ id, label }) => ({
    id,
    value: label,
  }));

  return (
    <div>
      <h1>Ambientações</h1>

      <AttributeTable
        rows={rows}
        columns={columns}
        removeAction={deleteAction}
      />

      <Link href="/atributos/ambientacoes/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
