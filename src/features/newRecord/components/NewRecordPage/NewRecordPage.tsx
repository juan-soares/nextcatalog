import styles from "./NewRecordPage.module.css";
import NewRecordForm from "../NewRecordForm/NewRecordForm";
import { getMediaTypeInfoBySlug } from "@/features/mediaType/services";

interface Props {
  mediaTypeSlug: string;
}

export default async function NewRecordPage({ mediaTypeSlug }: Props) {
  const { title } = await getMediaTypeInfoBySlug(mediaTypeSlug);
  return (
    <main className={styles.NewRecordPage}>
      <h1>Novo Registro: {title}</h1>
      <NewRecordForm mediaType={title} />
    </main>
  );
}
