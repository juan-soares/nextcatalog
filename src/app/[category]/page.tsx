import styles from "./CategoryPage.module.css";
import { listCategoryBySlug } from "@/src/lib/services";
import { notFound } from "next/navigation";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  const categoryInfo = await listCategoryBySlug(category);

  if (!categoryInfo) {
    notFound();
  }

  const { title } = categoryInfo;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.content}>
        <aside className={styles.sidebar}>Sidebar</aside>

        <section className={styles.main}>Conteúdo principal</section>
      </div>
    </main>
  );
}
