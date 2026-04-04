import styles from "./AttributeTable.module.css";
import { AttributeTableInfo } from "./AttributeTable.types";

interface Props {
  attributeTableInfo: AttributeTableInfo;
}

export default function AttributeTable({ attributeTableInfo }: Props) {
  return (
    <table className={styles.attributeTable}>
      <thead>
        <tr>
          {attributeTableInfo.columns.map(({ key, label }) => (
            <th key={key}>{label}</th>
          ))}
          <th>Alterar</th>
          <th>Remover</th>
        </tr>
      </thead>

      <tbody>
        {attributeTableInfo.values.map((item, index) => (
          <tr key={index}>
            {attributeTableInfo.columns.map(({ key }) => (
              <td key={key}>{item[key]}</td>
            ))}
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
  );
}
