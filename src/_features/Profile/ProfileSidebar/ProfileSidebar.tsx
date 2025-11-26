import Link from "next/link";
import { getSessions } from "./ProfileSidebar.action";

export async function ProfileSidebar() {
  const sessions = await getSessions();

  return (
    <aside>
      <ul>
        {sessions.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href={`/profile?q=${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
