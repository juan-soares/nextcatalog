import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logotipo do site." width={120} height={40} />
    </Link>
  );
}
