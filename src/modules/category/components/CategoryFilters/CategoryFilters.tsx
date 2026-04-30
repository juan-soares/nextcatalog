import { Filter } from "../../types";

interface Props {
  filters: Filter[];
}

export default function CategoryFilters({ filters }: Props) {
  return (
    <aside>
      {filters.map(({ key, label, options }) => (
        <div key={key}>
          <p>{label}</p>

          {options.map((option) => (
            <button key={option}>{option}</button>
          ))}
        </div>
      ))}
    </aside>
  );
}
