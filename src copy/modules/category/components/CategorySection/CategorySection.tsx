import MediaCard from "@/modules/media/components/MediaCard/MediaCard";
import { Media } from "@/modules/media/types";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
  medias: Media[];
}

export default function CategorySection({ label, href, medias }: Props) {
  medias.map((m) => console.log(m));

  return (
    <section>
      <h2>{label}</h2>

      <Link href={href}>Mais resultados..</Link>
    </section>
  );
}
