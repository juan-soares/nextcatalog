import { MediaCategory, MediaDetails } from "@/config/category";

export type Media<TCategory extends MediaCategory = MediaCategory> = {
  title: string;
  translatedTitle?: string;
  slug: string;

  category: TCategory;

  cover: string;
  trailer?: string;
  language?: string;

  synopsis?: string;

  genres?: string[];
  themes?: string[];

  franchisesId: string[];

  acquired: boolean;
  completed: boolean;

  releaseDate?: Date;

  details: MediaDetails<TCategory>;

  createdAt?: Date;
  updatedAt?: Date;
};
