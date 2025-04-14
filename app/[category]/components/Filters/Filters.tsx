import Link from "next/link";

export function Filters() {
  return (
    <aside>
      <div>
        <input type="search" />
        <button>0-</button>
        <Link href={`/animes/novo-registro`}>
          <button>+</button>
        </Link>
      </div>
      <div>
        <h2>Filtro 1</h2>
        <ul>
          <li>
            <input type="checkbox" id="" name="" value="" />
            <label htmlFor="">valor 1</label>
          </li>
          <li>
            <input type="checkbox" id="" name="" value="" />
            <label>valor 2</label>
          </li>
          <li>
            <input type="checkbox" id="" name="" value="" />
            <label>valor 3</label>
          </li>
        </ul>
      </div>
    </aside>
  );
}
