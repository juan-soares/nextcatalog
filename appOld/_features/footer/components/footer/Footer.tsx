import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} CataloGeek. Todos os direitos reservados.</p>
    </footer>
  );
}
