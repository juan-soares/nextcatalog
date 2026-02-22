import { notFound } from "next/navigation";
import styles from "./CategoryPage.module.css";
import {
  listCategoryBySlug,
  listCategoryWithMediaItemCardsByCategoryId,
} from "@/src/lib/services";
import { MediaList } from "@/src/components/ui";
import { Sortbar } from "@/src/components/categoryPage";

interface Props {
  params: {
    category: string;
  };
  searchParams: {
    sort?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { sort = "recent" } = await searchParams;

  const categoryInfo = await listCategoryBySlug(category);

  if (!category || !categoryInfo) {
    notFound();
  }

  const categoryWithMediaItemCards =
    await listCategoryWithMediaItemCardsByCategoryId(categoryInfo._id);

  const { title, slug } = categoryInfo;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.content}>
        <aside className={styles.sidebar}>Sidebar</aside>

        <section className={styles.main}>
          <Sortbar currentSort={sort} />
          <MediaList
            medias={categoryWithMediaItemCards?.mediaItemCards ?? []}
            categorySlug={slug}
          />
        </section>
      </div>
    </main>
  );
}
