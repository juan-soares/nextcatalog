import database from "@/app/_lib/database";
import Link from "next/link";

export async function Navbar() {
  const f = await database.getCollectionRecords("franchises");
  return (
    <nav>
      <Link href="/slug">titulo</Link>
    </nav>
  );
}
