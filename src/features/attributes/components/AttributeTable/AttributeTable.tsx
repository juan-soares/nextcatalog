import Link from "next/link";
import styles from "./AttributeTable.module.css";
import { AttributeRecord } from "./AttributeTable.types";

interface Props {
  slug: string;
  attributeRecords: AttributeRecord[] | null;
}

export default function AttributeTable({ slug, attributeRecords }: Props) {
  if (!attributeRecords)
    return (
      <div>
        <p>
          O atributo que você está procurando ainda não existe internamente.
        </p>
      </div>
    );

  return (
    <div>
      <table className={styles.attributeTable}>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Código</th>
            <th>Alterar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {attributeRecords.map(({ id, value, code }) => (
            <tr key={id}>
              <td>{value}</td>
              <td>{code}</td>
              <td>
                <button>A</button>
              </td>
              <td>
                <button>D</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>
        <Link href={`/atributos/${slug}/novo`}>Adicionar</Link>
      </button>
    </div>
  );
}
