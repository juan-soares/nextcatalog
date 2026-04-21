export interface Props {
  term: string;
  numberOfResults: number;
}

export default function SearchHeader({ term, numberOfResults }: Props) {
  return (
    <div>
      <h1>Resultado da pesquisa: "{term}".</h1>
      <p>{numberOfResults} resultados encontrados.</p>
    </div>
  );
}
