import Link from "next/link";

export async function ProfileSidebar() {
  const sessions = [];
  return (
    <aside>
      <ul>
        {sessions.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
