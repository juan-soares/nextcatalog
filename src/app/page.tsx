import { CATEGORY_CONFIG } from "@/config";
import { MediaList } from "@/modules/media";
import { listMedia } from "@/modules/media/services/listMedia.service";

export default async function HomePage() {
  const categories = Object.keys(CATEGORY_CONFIG);

  const sections = await Promise.all(
    categories.map(async (category) => {
      const { mediaList } = await listMedia({
        category,
        searchParams: {
          sort: "recent",
          page: "1",
        },
      });

      return {
        category,
        mediaList: mediaList.slice(0, 5),
      };
    }),
  );

  return (
    <main>
      {sections.map(({ category, mediaList }) => {
        const config =
          CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];

        return (
          <section key={category}>
            <h2>{config.label}</h2>

            <MediaList list={mediaList} />
          </section>
        );
      })}
    </main>
  );
}
