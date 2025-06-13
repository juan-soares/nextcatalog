import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <img
        src="/img/icons/logo.png"
        alt="Logotipo do site."
        width={80}
        height={80}
      />
    </Link>
  );
}
