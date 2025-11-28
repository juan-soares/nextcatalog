import { ISearchItem } from "./search";

export interface IUseSearchResult {
  loading: boolean;
  results: ISearchItem[];
  showDropdown: boolean;
  setShowDropdown: (v: boolean) => void;
}
