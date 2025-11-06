export interface IDB {
  categories: ICategory[];
}

interface IDBCollection {
  id: string;
  created_at: string;
  last_modified: string;
}

export interface ICategory extends IDBCollection {
  title: string;
}
