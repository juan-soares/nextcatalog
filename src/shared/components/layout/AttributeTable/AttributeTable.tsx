import { AttributeRowValues } from "./AttributeTable.types";

interface Props {
  rows: AttributeRowValues[];
}

export default function AttributeTable({ rows }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Valor</td>
          <td>Código</td>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, value, code }) => (
          <tr key={id}>
            <td>{value}</td>
            <td>{code}</td>
            <td>
              <button>Alterar</button>
            </td>
            <td>
              <button>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
