import styles from "./mediaTypePage.module.css";
import { MediaTypeFilters } from "../MediaTypeFilters";
import { getMediaTypeInfoBySlug } from "../../services";
import { MediaTypeSort } from "../MediaTypeSort";
import { MediaCardList } from "@/shared/components/layout/MediaCardList";
import { toString } from "@/shared/utils";

interface Props {
  mediaTypeSlug: string;
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function MediaTypePage({
  mediaTypeSlug,
  searchParams,
}: Props) {
  const { title, href } = await getMediaTypeInfoBySlug(mediaTypeSlug);
  const sort = toString(searchParams.sort) || "a-z";

  return (
    <div className={styles.mediaTypePage}>
      <h1>{title}</h1>
      <MediaTypeFilters href={href} filters={[]} />
      <main>
        <MediaTypeSort currentSort={sort} />
        <MediaCardList mediasInfo={[]} />
      </main>
    </div>
  );
}
