export const CATEGORY_CONFIG = {
  "jogos-eletronicos": {
    key: "videoGames",
    label: "Jogos Eletrônicos",
    filters: ["languages", "platforms", "players", "genres", "themes"],
  },

  "jogos-de-tabuleiro": {
    key: "boardGames",
    label: "Jogos de Tabuleiro",
    filters: ["players", "genres", "themes"],
  },

  animes: {
    key: "animes",
    label: "Animes",
    filters: ["languages", "resolutions", "themes"],
  },

  series: {
    key: "series",
    label: "Séries",
    filters: ["languages", "resolutions", "themes"],
  },

  "filmes-live-action": {
    key: "liveActions",
    label: "Filmes Live Action",
    filters: ["languages", "resolutions", "genres"],
  },

  "filmes-animacao": {
    key: "animations",
    label: "Filmes de Animação",
    filters: ["languages", "resolutions", "genres"],
  },

  "desenhos-animados": {
    key: "cartoons",
    label: "Desenhos Animados",
    filters: ["languages", "resolutions", "themes"],
  },

  musicas: {
    key: "music",
    label: "Músicas",
    filters: ["genres"],
  },

  livros: {
    key: "books",
    label: "Livros",
    filters: ["genres", "themes"],
  },

  hqs: {
    key: "comics",
    label: "HQs",
    filters: ["genres", "themes"],
  },
} as const;
