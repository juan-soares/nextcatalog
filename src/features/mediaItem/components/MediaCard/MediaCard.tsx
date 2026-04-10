import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  cover: string;
  title: string;
  synopsis: string;
  releaseYear: string;
}

export default function MediaCard({
  href,
  cover,
  title,
  synopsis,
  releaseYear,
}: Props) {
  return (
    <li>
      <Link href={href}>
        <div>
          <Image src={cover} alt={`Capa do título ${title}.`} />
          <p>{synopsis}</p>
        </div>
        <div>
          <strong>{title}</strong>
          <span>{releaseYear}</span>
        </div>
      </Link>
    </li>
  );
}
