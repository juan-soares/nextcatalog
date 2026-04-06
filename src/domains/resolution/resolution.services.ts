import {
  Resolution,
  ResolutionDTO,
  ResolutionFindOptions,
  ResolutionModel,
  resolutionRepository,
  ResolutionServiceFilters,
} from "@/domains/resolution";

export const resolutionServices = {
  async listResolutions(
    filters?: Partial<ResolutionServiceFilters>,
  ): Promise<ResolutionDTO[]> {
    const options: ResolutionFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await resolutionRepository.findAll(options);
  },

  async create(newResolution: Resolution): Promise<void> {
    const resolution = new ResolutionModel({
      label: newResolution.label,
      code: newResolution.code,
    });

    await resolution.save();
  },

  async remove(repositoryId: string): Promise<void> {
    await resolutionRepository.findByIdAndDelete(repositoryId);
  },
};
