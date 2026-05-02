import { CategoryKey, Filter } from "../types";

export const FILTER_CONFIG: Record<CategoryKey, Filter[]> = {
  "jogos-eletronicos": [
    {
      key: "platforms",
      label: "Plataformas",
      type: "multi",
      options: ["PC", "PS5", "Xbox"],
    },
    {
      key: "genres",
      label: "Gêneros",
      type: "multi",
      options: ["RPG", "Shooter", "Aventura"],
    },
  ],
  "jogos-de-tabuleiro": [],

  animes: [
    {
      key: "resolution",
      label: "Resolução",
      type: "single",
      options: ["SD", "HD", "Full HD", "4K"],
    },
  ],
  series: [],
  desenhos: [],

  "filmes-animacao": [],
  "filmes-live-action": [],

  hqs: [],
  livros: [],

  musicas: [],
} as const;
