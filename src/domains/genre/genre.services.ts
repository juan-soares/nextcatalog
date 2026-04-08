import {
  Genre,
  GenreDTO,
  GenreFindOptions,
  GenreModel,
  genreRepository,
  GenreServiceFilters,
} from "@/domains/genre";

export const genreServices = {
  async listAll(filters?: Partial<GenreServiceFilters>): Promise<GenreDTO[]> {
    const options: GenreFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await genreRepository.findAll(options);
  },

  async create(newGenre: Genre): Promise<void> {
    const genre = new GenreModel({
      label: newGenre.label,
    });

    await genre.save();
  },

  async remove(modeId: string): Promise<void> {
    await genreRepository.findByIdAndDelete(modeId);
  },
};
