import { GenreDocument, GenreDTO } from "@/domains/genre";

export const genreMappers = {
  toDTO({ _id, label }: GenreDocument): GenreDTO {
    return {
      id: _id.toString(),
      label,
    };
  },
};
