import styles from "./NewRecordForm.module.css";

export default function NewRecordForm() {
  return (
    <form className={styles.NewRecordForm}>
      <label htmlFor="title">Titulo</label>
      <input name="title" required />
      <label htmlFor="translatedTitle">Titulo Traduzido</label>
      <input name="translatedTitle" />
      <button>Enviar</button>
    </form>
  );
}
