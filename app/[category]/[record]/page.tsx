import { IRecord } from "@/app/_lib/interfaces";
import { Seasons } from "./components";

export default function RecordPage() {
  const recordInfo: IRecord = {
    id: "1",
    slug: "",
    trailer: "1",
    cover: "1",
    category: "animes",
    subcategory: "1",
    title: "1",
    translatedTitle: "",
    release: "2001-01-01",
    synopse: "11",
    directSequel: "1",
    chronologicalSequel: "1",
    arc: "1",
    themes: ["1"],
    franchises: ["1"],
    files: [],
    images: [],
    aquired: false,
    complete: false,
    hasSeason: true,
  };

  const {
    id,
    trailer,
    category,
    subcategory,
    title,
    translatedTitle,
    release,
    synopse,
    directSequel,
    chronologicalSequel,
    arc,
    themes,
    franchises,
    aquired,
    complete,
    files,
    images,
    hasSeason,
  } = recordInfo;

  return (
    <main>
      <section>
        <video autoPlay loop muted controls>
          <source src={trailer} type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
        <p>{subcategory}</p>
        <h1>{title}</h1>
        <h2>{translatedTitle}</h2>
        <p>{release}</p>
        <p>{synopse}</p>
      </section>

      <section>
        {images.map((image) => (
          <span key={image}>{image}</span>
        ))}
      </section>

      <section>
        <p>{directSequel}</p>
        <p>{chronologicalSequel}</p>
        <p>{arc}</p>
      </section>

      <section>
        {files.map((file) => (
          <span key={file}>{file}</span>
        ))}
      </section>

      <section>
        {themes.map((theme) => (
          <span key={theme}>{theme}</span>
        ))}
        {franchises.map((franchise) => (
          <span key={franchise}>{franchise}</span>
        ))}
      </section>

      <section>
        <label>Adquirido</label>
        <input type="checkbox" checked={aquired} readOnly />
        <label>Completo</label>
        <input type="checkbox" checked={complete} readOnly />
      </section>

      {hasSeason && <Seasons titleID={id} />}
    </main>
  );
}
