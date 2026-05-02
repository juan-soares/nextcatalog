import Link from "next/link";
import Image from "next/image";
import { MediaCard as IMediaCard } from "../../types";

interface Props {
  mediaInfo: IMediaCard;
}

export default function MediaCard({ mediaInfo }: Props) {
  const { href, synopsis, cover, title, releaseYear } = mediaInfo;

  return (
    <li>
      <Link href={href}>
        <div>
          <p>{synopsis}</p>
          <Image
            src={cover}
            alt={`Capa do título ${title}.`}
            width={60}
            height={60}
          />
        </div>
        <strong>{title}</strong>
        <span>{releaseYear}</span>
      </Link>
    </li>
  );
}
