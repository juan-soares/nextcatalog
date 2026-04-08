import Link from "next/link";
import { themeServices } from "@/domains/theme";
import { deleteAction } from "./ThemeTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function ThemeTable() {
  const themes = await themeServices.listAll();
  const columns = ["Valores"];
  const rows = themes.map(({ id, label }) => ({
    id,
    value: label,
  }));

  return (
    <div>
      <h1>Temas</h1>

      <AttributeTable
        rows={rows}
        columns={columns}
        removeAction={deleteAction}
      />

      <Link href="/atributos/temas/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
