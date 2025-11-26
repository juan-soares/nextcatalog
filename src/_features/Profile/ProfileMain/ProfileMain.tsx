import Link from "next/link";
import { getSectionRecords } from "./ProfileMain.actions";
import { collectionMap } from "./ProfileMain.types";

interface IParams {
  section: string;
}

export async function ProfileMain({ section }: IParams) {
  const sectionRecords = await getSectionRecords(collectionMap[section]);

  return (
    <main>
      <button>Adicionar</button>
      <button>A-Z</button>
      <button>Release</button>
      <button>Recente</button>
      <ul>
        {sectionRecords.map(({ _id, title }) => (
          <li key={_id}>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
