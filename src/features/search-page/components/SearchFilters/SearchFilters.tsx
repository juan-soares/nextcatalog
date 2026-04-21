import { buildSearchFilters } from "../../utils";
import { SearchOption } from "../SearchOption";

export default async function SearchFilters() {
  const filters = await buildSearchFilters();

  return (
    <aside>
      {filters.map(({ label, options, name }) => (
        <fieldset key={label}>
          <legend>{label}</legend>
          {options.map((option) => (
            <SearchOption key={option.id} name={name} {...option} />
          ))}
        </fieldset>
      ))}
    </aside>
  );
}
