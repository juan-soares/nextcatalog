export interface Episode {
  number: number;
  title: string;
  releaseDate: string;
  acquired: boolean;
  finished: boolean;
}

export interface Season {
  number: number;
  languageId: string;
  releaseDate: string;
  subcategory?: string;
  cover?: string;
  episodes: Episode[];
}
