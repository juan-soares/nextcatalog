import { SubmitButton } from "../SubmitButton";
import styles from "./NewThemeForm.module.css";
import { postNewTheme } from "@/app/_lib/actions/postNewTheme";

export async function NewThemeForm() {
  return (
    <form className={styles.form} action={postNewTheme}>
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

      <SubmitButton />
    </form>
  );
}
