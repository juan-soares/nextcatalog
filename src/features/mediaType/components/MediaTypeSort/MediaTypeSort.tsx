import styles from "./MediaTypeSort.module.css";

interface Props {
  currentSort: string;
}

export default function MediaTypeSort({ currentSort }: Props) {
  return (
    <div className={styles.mediaTypeSort}>
      <form method="GET">
        <button name="sort" value="a-z">
          A-Z {currentSort === "a-z" && "✓"}
        </button>

        <button name="sort" value="recente">
          Recente {currentSort === "recente" && "✓"}
        </button>

        <button name="sort" value="criado">
          Criado {currentSort === "criado" && "✓"}
        </button>
      </form>
    </div>
  );
}
