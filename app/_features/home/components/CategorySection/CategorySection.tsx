import styles from "./CategorySection.module.css";

interface IProps {
  collection: string;
}

export function CategorySection({ collection }: IProps) {
  return <section className={styles.categorySection}>{collection}</section>;
}
