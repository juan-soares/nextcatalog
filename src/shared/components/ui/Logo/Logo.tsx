import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo/logo.png"
        alt="Logotipo do site."
        width={60}
        height={60}
      />
    </Link>
  );
}
