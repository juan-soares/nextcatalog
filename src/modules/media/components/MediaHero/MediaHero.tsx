import Image from "next/image";
import { FranchiseLink, FranchiseLogoList } from "@/modules/franchise";
import MediaTags from "../MediaTags/MediaTags";

interface Props {
  trailer?: string;
  cover: string;
  title: string;
  translatedTitle?: string;
  synopsis: string;
  acquired: boolean;
  complete: boolean;
  releaseYear: string;
  category: string;
  themes: string[];
  franchises: FranchiseLink[];
}

export default function MediaHero({
  trailer,
  cover,
  title,
  translatedTitle,
  synopsis,
  acquired,
  complete,
  releaseYear,
  category,
  themes,
  franchises,
}: Props) {
  return (
    <header>
      {/* BACKGROUND */}
      <div>
        {trailer ? (
          <video src={trailer} autoPlay muted loop playsInline />
        ) : (
          <Image
            src={cover}
            alt={`Capa do título ${title}.`}
            width={60}
            height={60}
          />
        )}
      </div>

      {/* OVERLAY */}
      <div>
        <h1>{title}</h1>
        <h2>{translatedTitle}</h2>
        <p>
          <span>{acquired ? "Adquirido" : "Não Adquirido"}</span>
          <span>{complete ? "Completo" : "Incompleto"}</span>
        </p>
        <div>
          <p>{synopsis}</p>
          <MediaTags
            releaseYear={releaseYear}
            category={category}
            themes={themes}
          />
          <FranchiseLogoList franchises={franchises} />
        </div>
        <Image
          src={cover}
          alt={`Capa do título ${title}.`}
          width={60}
          height={60}
        />
      </div>
    </header>
  );
}
