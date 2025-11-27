"use server";

import { ISearchItem } from "../types";

export async function search(query: string): Promise<ISearchItem[]> {
  if (!query || query.trim() === "") {
    return [];
  }

  return [
    {
      _id: "1",
      title: "Título Original",
      translatedTitle: "Título Traduzido",
      releaseYear: "2024",
      cover: "/assets/mock-cover.jpg",
      categoryTitle: "Filme",
      slug: "/filmes/titulo-1",
    },
  ];
}
