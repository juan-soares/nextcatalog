import { CATEGORY_CONFIG } from "@/config";

interface Props {
  releaseYear: string;
  category: string;
  themes: string[];
}

export default function MediaTags({ releaseYear, category, themes }: Props) {
  const categoryLabel =
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.label ||
    category;

  return (
    <div>
      <span>{releaseYear}</span>
      <span>{categoryLabel}</span>
      {themes.map((theme) => (
        <span key={theme}>{theme}</span>
      ))}
    </div>
  );
}
