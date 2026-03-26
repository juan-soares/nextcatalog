import Link from "next/link";
import { HomeSectionInfo } from "../../types";

interface Props {
  section: HomeSectionInfo;
}

export default function HomeSection({
  section: { title, href, medias },
}: Props) {
  return (
    <section>
      <h2>{title}</h2>

      <Link href={href}>Ver todos...</Link>
    </section>
  );
}
