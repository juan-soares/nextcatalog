import { connectMongo } from "@/database/mongodb/connection";
import {
  Genre,
  GenreDocument,
  GenreDTO,
  GenreFindOptions,
  genreMappers,
  GenreModel,
  GenreServiceSort,
} from "@/domains/genre";

export const genreRepository = {
  async findAll(options: GenreFindOptions = {}): Promise<GenreDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as GenreServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: GenreDocument[] = await GenreModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(genreMappers.toDTO);
  },

  async create(data: Genre): Promise<GenreDTO> {
    await connectMongo();
    const doc = await GenreModel.create(data);
    return genreMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await GenreModel.findByIdAndDelete(id);
  },
};
