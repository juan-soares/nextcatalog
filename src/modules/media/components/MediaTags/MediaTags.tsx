interface Props {
  releaseYear: string;
  category: string;
  themes: string[];
}

export default function MediaTag({ releaseYear, category, themes }: Props) {
  return (
    <div>
      <span>{releaseYear}</span>
      <span>{category}</span>
      {themes.map((theme) => (
        <span key={theme}>{theme}</span>
      ))}
    </div>
  );
}
