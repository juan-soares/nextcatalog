import { getMediaTypeInfoBySlug } from "../../services";
import styles from "./mediaTypePage.module.css";

interface Props {
  mediaTypeSlug: string;
}

export default async function MediaTypePage({ mediaTypeSlug }: Props) {
  const { title } = await getMediaTypeInfoBySlug(mediaTypeSlug);
  return (
    <div className={styles.mediaTypePage}>
      <h1>{title}</h1>
    </div>
  );
}
