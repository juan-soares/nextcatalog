import { FormDeleteBtn } from "../../ui";
import { AttributeRowValues } from "./AttributeTable.types";

interface Props {
  rows: AttributeRowValues[];
  columns: string[];
  removeAction: (id: string) => void;
}

export default function AttributeTable({ rows, columns, removeAction }: Props) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <td key={column}>{column}</td>
          ))}
          <td>Alterar</td>
          <td>Remover</td>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, value, code }) => (
          <tr key={id}>
            <td>{value}</td>
            {code && <td>{code}</td>}
            <td>
              <button>Alterar</button>
            </td>
            <td>
              <form action={removeAction.bind(null, id)}>
                <FormDeleteBtn />
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
