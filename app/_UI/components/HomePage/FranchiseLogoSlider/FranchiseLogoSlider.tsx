import Link from "next/link";
import { IFranchise } from "@/app/_lib/database/database.interface";
import { getAllFranchises } from "@/app/_lib/services";

export async function FranchiseLogoSlider() {
  const franchises: IFranchise[] = await getAllFranchises();

  if (!franchises.length) return;

  return (
    <div>
      <button>L</button>
      <ul>
        {franchises.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
      <button>R</button>
    </div>
  );
}
