import styles from "./AttributeTable.module.css";
import { AttributeTableInfo } from "./AttributeTable.types";

interface Props {
  attributeTableInfo: AttributeTableInfo;
}

export default function AttributeTable({ attributeTableInfo }: Props) {
  const { columns, values } = attributeTableInfo;

  return (
    <table className={styles.attributeTable}>
      <thead>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </thead>
      <tbody>
        {values.map((value) => (
          <tr>
            <td key={value}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
