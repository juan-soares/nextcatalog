import Link from "next/link";
import { getRecentRecordsByCategory } from "@/app/_lib/db";

export async function RecentList() {
  const recentRecordsByCategory = await getRecentRecordsByCategory();

  return (
    <main>
      {recentRecordsByCategory.map(({ categoryTitle, records }) => (
        <section key={categoryTitle}>
          <h2>{categoryTitle}</h2>
          <ul>
            {records.map(
              ({ id, slug, cover, title, translatedTitle, release }) => (
                <li key={id}>
                  <Link href={slug}>
                    <img src={cover} alt={`Capa do título ${title}.`} />
                    <h3>{title}</h3>
                    <h4>{translatedTitle}</h4>
                    <p>{`(${release.slice(0, 4)})`}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}
