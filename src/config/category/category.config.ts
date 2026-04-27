export const CATEGORY_CONFIG = {
  animes: {
    label: "Animes",
    filters: ["languages", "resolutions", "themes"],
  },
  "video-games": {
    label: "Jogos Eletrônicos",
    filters: ["languages", "platforms", "modes", "genres", "players"],
  },
} as const;
