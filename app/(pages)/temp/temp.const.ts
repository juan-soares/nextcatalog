interface ICategory {
  _id: string;
  title: string;
  collection: string;
}

export const categories: ICategory[] = [
  { _id: "cat001", title: "Animes", collection: "animes" },
];
