import { notFound } from "next/navigation";
import styles from "./CategoryPage.module.css";
import {
  listCategoriesWithMediaItemCards,
  listCategoryBySlug,
  listCategoryWithMediaItemCardsByCategoryId,
} from "@/src/lib/services";
import { MediaList } from "@/src/components/ui";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

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
          <MediaList
            medias={categoryWithMediaItemCards?.mediaItemCards ?? []}
            categorySlug={slug}
          />
        </section>
      </div>
    </main>
  );
}
