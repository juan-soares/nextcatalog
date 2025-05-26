export interface IDatabase {
  franchises: IFranchise[];
}

export type CollectionsTitleMap = keyof IDatabase;

export interface IDatabaseRecord {
  id: string;
  createdAt: string;
}

export interface IFranchise extends IDatabaseRecord {
  id: string;
  title: string;
  slug: string;
  logo: string;
}
