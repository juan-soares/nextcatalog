import { MediaType } from "@/domains/media-type";
import { FilterCheckboxOption } from "../../types";

interface Props {
  legend: string;
  name: string;
  getOptions: () => Promise<MediaType[]>;
}

export default async function SearchFilter({
  legend,
  name,
  getOptions,
}: Props) {
  const options: FilterCheckboxOption[] = await getOptions();

  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map(({ id, label }) => (
        <div key={id}>
          <input type="checkbox" id={id} name={name} value={id} />
          <label htmlFor={id}>{label}</label>
        </div>
      ))}
    </fieldset>
  );
}
