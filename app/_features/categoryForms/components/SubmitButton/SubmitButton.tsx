"use client";

import { handleSubmit } from "./SubmitButton.const";
import styles from "./SubmitButton.module.css";

export function SubmitButton() {
  return (
    <button
      className={styles.submitButton}
      type="submit"
      onClick={handleSubmit}
    >
      Enviar
    </button>
  );
}
