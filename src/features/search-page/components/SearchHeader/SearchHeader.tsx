export interface Props {
  query: string;
  numberOfResults: number;
}

export default function SearchHeader({ query, numberOfResults }: Props) {
  return (
    <div>
      <h1>Resultado da pesquisa: "{query}".</h1>
      <p>{numberOfResults} resultados encontrados.</p>
    </div>
  );
}
