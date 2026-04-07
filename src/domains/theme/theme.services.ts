import {
  Theme,
  ThemeDTO,
  ThemeFindOptions,
  ThemeModel,
  themeRepository,
  ThemeServiceFilters,
} from "@/domains/theme";

export const themeServices = {
  async listAll(filters?: Partial<ThemeServiceFilters>): Promise<ThemeDTO[]> {
    const options: ThemeFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await themeRepository.findAll(options);
  },

  async create(newTheme: Theme): Promise<void> {
    const theme = new ThemeModel({
      label: newTheme.label,
    });

    await theme.save();
  },

  async remove(themeId: string): Promise<void> {
    await themeRepository.findByIdAndDelete(themeId);
  },
};
