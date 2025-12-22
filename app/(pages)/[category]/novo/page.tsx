import { CategoryForm } from "@/app/_features/categoryForms/components/CategoryForm";
import styles from "./page.module.css";

export default async function CategoryNovoPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categoryTitle = (await params).category;

  return (
    <div className={styles.pageContainer}>
      <h1
        className={styles.pageTitle}
      >{`Novo Registro em: ${categoryTitle}`}</h1>
      <div className={styles.formWrapper}>
        <CategoryForm category={categoryTitle} />
      </div>
    </div>
  );
}
