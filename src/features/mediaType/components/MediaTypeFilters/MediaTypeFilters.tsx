"use server";

import Link from "next/link";
import styles from "./MediaTypeFilters.module.css";
import { filterAction } from "./MediaTypeFilters.actions";

interface Props {
  mediaTyleSlug: string;
}

export default async function MediaTypeFilters({ mediaTyleSlug }: Props) {
  return (
    <aside className={styles.mediaTypeFilters}>
      <div>
        <input type="search" placeholder="Pesquisar..." />
        <Link href={`/${mediaTyleSlug}/novo`}>
          <button type="button">+</button>
        </Link>
      </div>
      <div>
        <form action={filterAction}>
          <h2>Filtros</h2>
          <fieldset>
            <legend>Idiomas</legend>
            <input name="language" id="l1" type="checkbox" value="1" />
            <label htmlFor="l1">Teste 1 </label>
            <input name="language" id="l2" type="checkbox" value="2" />
            <label htmlFor="l2">Teste 1 </label>
          </fieldset>

          <fieldset>
            <legend>Franquias</legend>
            <input name="franchise" id="f1" type="checkbox" value="1" />
            <label htmlFor="f1">Teste 1 </label>
          </fieldset>

          <fieldset>
            <legend>Adquirido</legend>
            <input name="aquired" id="aquired" type="checkbox" value="true" />
            <label htmlFor="aquired">Sim</label>
            <input
              name="aquired"
              id="notaquired"
              type="checkbox"
              value="false"
            />
            <label htmlFor="notaquired">Não</label>
          </fieldset>

          <fieldset>
            <legend>Completo</legend>
            <input name="complete" id="complete" type="checkbox" value="true" />
            <label htmlFor="complete">Sim</label>
            <input
              name="complete"
              id="notcomplete"
              type="checkbox"
              value="false"
            />
            <label htmlFor="notcomplete">Não</label>
          </fieldset>
          <button type="submit">Filtrar</button>
        </form>
      </div>
    </aside>
  );
}
