export interface IDatabase {
  categories: ICategory[];
  animes: IAnime[];
}

export interface ICategory extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}

export interface IAnime extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}

export interface IRecord {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFindParameters {
  query?: { fieldsToSearch: string[]; termsToSearch: string[] };
  limit?: number;
  sortBy?: "alph" | "recent" | "release";
}
