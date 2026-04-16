import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function SearchInput({ value, onChange, onSubmit }: Props) {
  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder="Pesquisar..."
      />
      <button type="button" onClick={onSubmit}>
        <Search />
      </button>
    </div>
  );
}
