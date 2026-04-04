import Link from "next/link";
import styles from "./AttributeTable.module.css";
import { AttributeRecord } from "./AttributeTable.types";

interface Props {
  slug: string;
  attributeRecords: AttributeRecord[];
}

export default function AttributeTable({ slug, attributeRecords }: Props) {
  return (
    <div>
      <button>
        <Link href={`/${slug}/novo`}>Adicionar</Link>
      </button>
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
    </div>
  );
}
