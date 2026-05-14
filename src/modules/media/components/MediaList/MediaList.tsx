import { MediaCard } from "../../types";

interface Props {
  list: MediaCard[];
}

export default function MediaList({ list }: Props) {
  if (!list.length)
    return (
      <div>
        <p>Sem itens na lista.</p>
      </div>
    );
  return <ul></ul>;
}
