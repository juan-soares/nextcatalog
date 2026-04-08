import {
  Environment,
  EnvironmentDTO,
  EnvironmentFindOptions,
  EnvironmentModel,
  environmentRepository,
  EnvironmentServiceFilters,
} from "@/domains/environment";

export const environmentServices = {
  async listAll(
    filters?: Partial<EnvironmentServiceFilters>,
  ): Promise<EnvironmentDTO[]> {
    const options: EnvironmentFindOptions = {
      filters,
      sort: { label: "asc" },
    };

    return await environmentRepository.findAll(options);
  },

  async create(newEnvironment: Environment): Promise<void> {
    const environment = new EnvironmentModel({
      label: newEnvironment.label,
    });

    await environment.save();
  },

  async remove(modeId: string): Promise<void> {
    await environmentRepository.findByIdAndDelete(modeId);
  },
};
