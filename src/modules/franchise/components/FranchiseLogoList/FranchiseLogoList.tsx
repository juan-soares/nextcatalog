import Image from "next/image";
import Link from "next/link";
import { FranchiseLink } from "../../types";

interface Props {
  franchises: FranchiseLink[];
}

export default function FranchiseLogoList({ franchises }: Props) {
  return (
    <ul>
      {franchises.map(({ id, href, logo, label }) => (
        <li key={id}>
          <Link href={href}>
            <Image
              src={logo}
              alt={`Logotipo da franquia ${label}.`}
              width={60}
              height={60}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
