import Link from "next/link";
import { modeServices } from "@/domains/mode";
import { deleteAction } from "./ModeTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function ThemeTable() {
  const modes = await modeServices.listAll();
  const columns = ["Valores"];
  const rows = modes.map(({ id, label }) => ({
    id,
    value: label,
  }));

  return (
    <div>
      <h1>Modos</h1>

      <AttributeTable
        rows={rows}
        columns={columns}
        removeAction={deleteAction}
      />

      <Link href="/atributos/modos/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
