import styles from "./HeaderInput.module.css";

export function HeaderInput() {
  return (
    <div className={styles.headerInput}>
      <input type="search" placeholder="Pesquisar..." />
      <button type="submit"></button>
    </div>
  );
}
