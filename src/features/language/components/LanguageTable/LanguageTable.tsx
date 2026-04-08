import Link from "next/link";
import { languageServices } from "@/domains/language";
import { deleteAction } from "./LanguageTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function LanguageTable() {
  const languages = await languageServices.listLanguages();
  const columns = ["Valor", "Código"];
  const rows = languages.map(({ id, label, code }) => ({
    id,
    value: label,
    code,
  }));

  return (
    <div>
      <h1>Idiomas</h1>

      <AttributeTable
        rows={rows}
        columns={columns}
        removeAction={deleteAction}
      />

      <Link href="/atributos/idiomas/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
