import { listMediaTypesUseCase } from "@/domains/media-type";
import { SearchFilter } from "../SearchFilter";

export default function SearchFilters() {
  const filters = [
    {
      legend: "Típo de Mídia",
      name: "mediaTypes",
      getOptions: listMediaTypesUseCase,
    },
  ];

  return (
    <aside>
      <div>
        <strong>Filtros</strong>
        <form>
          {filters.map((filter) => (
            <SearchFilter key={filter.legend} {...filter} />
          ))}
          <button>Enviar</button>
        </form>
      </div>
    </aside>
  );
}
