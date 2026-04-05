import Link from "next/link";
import { languageServices } from "@/domains/language";
import { deleteAction } from "./LanguageTable.actions";
import { AttributeTable } from "@/shared/components/layout";

export default async function LanguageTable() {
  const languages = await languageServices.listLanguages();
  const rows = languages.map(({ id, label, code }) => ({
    id,
    value: label,
    code: code || "",
  }));

  return (
    <div>
      <h1>Idiomas</h1>

      <AttributeTable rows={rows} removeAction={deleteAction} />

      <Link href="/atributos/idiomas/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
