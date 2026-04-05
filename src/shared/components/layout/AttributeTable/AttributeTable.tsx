import { FormDeleteBtn } from "../../ui";
import { AttributeRowValues } from "./AttributeTable.types";

interface Props {
  rows: AttributeRowValues[];
  removeAction: (id: string) => void;
}

export default function AttributeTable({ rows, removeAction }: Props) {
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
