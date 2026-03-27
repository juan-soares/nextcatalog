import Link from "next/link";
import styles from "./HomeSection.module.css";
import { HomeSectionInfo } from "../../types";
import { MediaCardList } from "@/shared/components/layout/MediaCardList";

interface Props {
  section: HomeSectionInfo;
}

export default function HomeSection({
  section: { title, href, mediasInfo },
}: Props) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <MediaCardList mediasInfo={mediasInfo} />
      <Link href={href}>Ver mais...</Link>
    </section>
  );
}
