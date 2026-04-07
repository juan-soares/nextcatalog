import {
  Platform,
  PlatformDTO,
  PlatformFindOptions,
  PlatformModel,
  platformRepository,
  PlatformServiceFilters,
} from "@/domains/platform";

export const platformServices = {
  async list(
    filters?: Partial<PlatformServiceFilters>,
  ): Promise<PlatformDTO[]> {
    const options: PlatformFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await platformRepository.findAll(options);
  },

  async create(newPlatform: Platform): Promise<void> {
    const platform = new PlatformModel({
      label: newPlatform.label,
      code: newPlatform.code,
    });

    await platform.save();
  },

  async remove(platformId: string): Promise<void> {
    await platformRepository.findByIdAndDelete(platformId);
  },
};
