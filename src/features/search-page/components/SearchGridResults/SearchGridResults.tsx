import Image from "next/image";
import Link from "next/link";

interface Props {
  results: [];
}

export default async function SearchGridResults() {
  return (
    <ul>
      <li>
        <Link href="/">
          <Image src="/" alt="Capa do título." width={60} height={60} />
          <strong>titulo</strong>
          <p>(releaseYear)</p>
        </Link>
      </li>
    </ul>
  );
}
