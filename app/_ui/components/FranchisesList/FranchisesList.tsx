import { getAllFranchises } from "@/app/_lib/db";
import { IFranchise } from "@/app/_lib/interfaces";
import Link from "next/link";

export async function FranchisesList() {
  const allFranchises: IFranchise[] = await getAllFranchises();

  if (!allFranchises.length)
    return (
      <article>
        <p>
          Sem franquias na lista. <Link href="/nova-franquia">Adicionar?</Link>
        </p>
      </article>
    );

  return (
    <ul>
      {allFranchises.map(({ id, slug, title, logo }) => (
        <li key={id}>
          <Link href={slug}>
            <img src={logo} alt={`Logotipo da franquia ${title}.`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
