export const MEDIA_TAB_CONFIG = {
  info: { label: "Informações" },
  files: { label: "Arquivos" },
  seasons: { label: "Temporadas" },
  content: { label: "Conteúdo" },
} as const;

export const MEDIA_TABS = Object.entries(MEDIA_TAB_CONFIG).map(
  ([key, value]) => ({
    key,
    label: value.label,
  }),
);
