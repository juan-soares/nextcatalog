import { connectMongo } from "@/database/mongodb/connection";
import {
  Theme,
  ThemeDocument,
  ThemeDTO,
  ThemeFindOptions,
  themeMappers,
  ThemeModel,
  ThemeServiceSort,
} from "@/domains/theme";

export const themeRepository = {
  async findAll(options: ThemeFindOptions = {}): Promise<ThemeDTO[]> {
    const { filters = {}, sort = {}, limit = 10 } = options;

    const mongoSort: Record<string, 1 | -1> = {};
    for (const key in sort) {
      const typedKey = key as ThemeServiceSort;
      mongoSort[typedKey] = sort[typedKey] === "asc" ? 1 : -1;
    }

    await connectMongo();
    const doc: ThemeDocument[] = await ThemeModel.find(filters)
      .sort(mongoSort)
      .limit(limit)
      .lean()
      .exec();

    return doc.map(themeMappers.toDTO);
  },

  async create(data: Theme): Promise<ThemeDTO> {
    await connectMongo();
    const doc = await ThemeModel.create(data);
    return themeMappers.toDTO(doc);
  },

  async findByIdAndDelete(id: string): Promise<void> {
    await connectMongo();
    await ThemeModel.findByIdAndDelete(id);
  },
};
