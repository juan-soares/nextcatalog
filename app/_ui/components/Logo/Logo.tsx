import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <img
        src="/img/icons/logo.png"
        alt="Logotipo do NextCatalog."
        width={100}
        height={100}
      />
    </Link>
  );
}
