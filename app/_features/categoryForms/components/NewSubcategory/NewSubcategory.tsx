import { postNewSubCategory } from "@/app/_lib/actions/postNewSubcategory";
import styles from "./NewSubcategory.module.css";

export async function NewSubcategoryForm() {
  return (
    <form className={styles.form} action={postNewSubCategory}>
      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Ficha Técnica</legend>

        <label className={styles.formLabel} htmlFor="title">
          Título:
        </label>
        <input
          className={styles.formInput}
          id="title"
          name="title"
          type="text"
          required
        />
      </fieldset>

      <button className={styles.formButton}>Enviar</button>
    </form>
  );
}
