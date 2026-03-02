import styles from "./HeaderSearch.module.css";
import { HeaderInput, HeaderSearchResults } from "./";

export function HeaderSearch() {
  return (
    <div className={styles.headerSearch}>
      <HeaderInput />
      <HeaderSearchResults />
    </div>
  );
}
