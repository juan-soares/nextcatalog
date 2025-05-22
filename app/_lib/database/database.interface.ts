export interface IDatabase {
  franchises: IFranchise[];
}

export type CollectionsTitleMap = keyof IDatabase;

export interface IFranchise {
  id: string;
  title: string;
  slug: string;
  logo: string;
}
