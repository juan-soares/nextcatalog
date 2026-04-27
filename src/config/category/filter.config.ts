export const FILTER_OPTIONS = {
  languages: [
    { label: "LEG-EN", value: "LEG-EN" },
    { label: "LEG-PT", value: "LEG-PT" },
  ],

  resolutions: [
    { label: "1080p", value: "1080p" },
    { label: "4K", value: "4k" },
  ],

  platforms: [
    { label: "PC", value: "pc" },
    { label: "PlayStation 5", value: "ps5" },
  ],

  players: [
    { label: "1 jogador", value: 1 },
    { label: "2 jogadores", value: 2 },
    { label: "Multiplayer", value: "multi" },
  ],
} as const;
