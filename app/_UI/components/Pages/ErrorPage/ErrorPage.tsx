import Link from "next/link";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <main className={styles.errorPage}>
      <img
        width={50}
        height={50}
        src="./img/icons/error-icon.png"
        alt="Ícone de mapa indicando que a página não foi encontrada."
      />
      <p>
        <strong>Ops!</strong> A página que está procurando não existe, ou não
        está disponível. Que tal <Link href="/">voltar</Link>?
      </p>
    </main>
  );
}
