import {
  Mode,
  ModeDTO,
  ModeFindOptions,
  ModeModel,
  modeRepository,
  ModeServiceFilters,
} from "@/domains/mode";

export const modeServices = {
  async listAll(filters?: Partial<ModeServiceFilters>): Promise<ModeDTO[]> {
    const options: ModeFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await modeRepository.findAll(options);
  },

  async create(newMode: Mode): Promise<void> {
    const mode = new ModeModel({
      label: newMode.label,
    });

    await mode.save();
  },

  async remove(modeId: string): Promise<void> {
    await modeRepository.findByIdAndDelete(modeId);
  },
};
