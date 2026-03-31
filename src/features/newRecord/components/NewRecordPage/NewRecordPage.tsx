import styles from "./NewRecordPage.module.css";
import NewRecordForm from "../NewRecordForm/NewRecordForm";

interface Props {
  title: string;
}

export default function NewRecordPage({ title }: Props) {
  return (
    <main className={styles.NewRecordPage}>
      <h1>Novo Registro: {title}</h1>
      <NewRecordForm />
    </main>
  );
}
