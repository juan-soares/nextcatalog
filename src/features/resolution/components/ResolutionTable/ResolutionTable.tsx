import Link from "next/link";
import { deleteAction } from "./ResolutionTable.actions";
import { AttributeTable } from "@/shared/components/layout";
import { resolutionServices } from "@/domains/resolution";

export default async function ResolutionTable() {
  const resolutions = await resolutionServices.listResolutions();
  const rows = resolutions.map(({ id, label, code }) => ({
    id,
    value: label,
    code: code || "",
  }));

  return (
    <div>
      <h1>Resoluções</h1>

      <AttributeTable rows={rows} removeAction={deleteAction} />

      <Link href="/atributos/resolucoes/novo">
        <button>+</button>
      </Link>
    </div>
  );
}
