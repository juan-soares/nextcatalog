import { languageServices } from "@/domains/language";
import { AttributeTable } from "@/shared/components/layout";
import Link from "next/link";

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

      <AttributeTable rows={rows} />

      <Link href="/atributos/idiomas/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
