"use client";

import { useSearchFilter } from "../../hooks";

interface Props {
  id: string;
  name: string;
  label: string;
}

export default function SearchOption({ id, name, label }: Props) {
  const { isChecked, toggleCheck } = useSearchFilter(name, id);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={id}
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
