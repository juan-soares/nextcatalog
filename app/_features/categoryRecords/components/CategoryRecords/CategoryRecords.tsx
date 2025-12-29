import styles from "./CategoryRecords.module.css";
import { IDatabase } from "@/app/_data/data.types";
import { getCategoryRecordsByCollection } from "./CategoryRecords.actions";
import Link from "next/link";
import { getFranchises } from "@/app/_lib/actions/getFranchises";
import { getThemes } from "@/app/_lib/actions/getThemes";

interface IProps {
  collection: keyof IDatabase;
  categoryTitle: string;
  categorySlug: string;
}

export async function CategoryRecords({
  collection,
  categoryTitle,
  categorySlug,
}: IProps) {
  const categoryRecords = await getCategoryRecordsByCollection(collection);
  const themes = await getThemes();
  const franchises = await getFranchises();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{categoryTitle}</h1>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <form>
            <input type="search" placeholder="Pesquisar..." />
            <Link href={`${categorySlug}/novo`}>
              <button type="button">Novo</button>
            </Link>
          </form>
          <form className={styles.filters}>
            <fieldset>
              <legend>Filtro 1</legend>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
            </fieldset>

            <fieldset>
              <legend>Filtro 2</legend>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
            </fieldset>

            <fieldset>
              <legend>Temáticas</legend>
              {themes.map(({ _id, title }) => (
                <label key={_id}>
                  <input type="checkbox" value={_id} name="themesId" />
                  {title}
                </label>
              ))}
            </fieldset>

            <fieldset>
              <legend>Franquias</legend>
              {franchises.map(({ _id, logo, title }) => (
                <label key={_id}>
                  <input type="checkbox" value={_id} name="franchisesId" />
                  <img src={logo} alt={`Logotipo da franquia ${title}.`} />
                </label>
              ))}
            </fieldset>

            <fieldset>
              <legend>Adquirido</legend>
              <label>
                <input type="checkbox" value={"true"} name="acquired" /> Sim
              </label>
              <label>
                <input type="checkbox" value={"false"} name="acquired" /> Não
              </label>
            </fieldset>
          </form>
        </aside>

        {/* Conteúdo */}
        <main className={styles.main}>
          {categoryRecords.length === 0 && (
            <section className={styles.empty}>
              <p>
                Sem itens na lista.{" "}
                <Link href={`${categorySlug}/novo`}>Adicionar?</Link>
              </p>
            </section>
          )}

          {categoryRecords.length > 0 && (
            <section>
              <div className={styles.sortBar}>
                <button>A-Z</button>
                <button>Lançamento</button>
                <button>Recente</button>
              </div>

              <ul className={styles.grid}>
                {categoryRecords.map(
                  ({ _id, slug, cover, title, releaseYear, synopsis }) => (
                    <li key={_id} className={styles.card} title={synopsis}>
                      <Link href={slug}>
                        <img src={cover} alt={`Capa do título ${title}.`} />
                        <strong>{title}</strong>
                        <span>{releaseYear}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
