import Link from "next/link";
import { platformServices } from "@/domains/platform";
import { deleteAction } from "./PlatformTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function PlatformTable() {
  const platforms = await platformServices.list();
  const columns = ["Valores","Código"]
  const rows = platforms.map(({ id, label, code }) => ({
    id,
    value: label,
    code,
  }));

  return (
    <div>
      <h1>Plataformas</h1>

      <AttributeTable rows={rows} columns={columns} removeAction={deleteAction} />

      <Link href="/atributos/plataformas/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
