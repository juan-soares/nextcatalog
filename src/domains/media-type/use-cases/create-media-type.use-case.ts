import { MediaType } from "../entity";
import { MediaTypeRepository } from "../infra";


type CreateMediaTypeInput = {
  title: string;
  slug: string;
  description?: string;
  filters?: MediaType["filters"];
  sortOptions?: MediaType["sortOptions"];
};

export async function createMediaTypeUseCase(
  input: CreateMediaTypeInput,
): Promise<MediaType> {
  // =========================
  // 1. VALIDATION / RULES
  // =========================

  const existing = await MediaTypeRepository.findBySlug(input.slug);

  if (existing) {
    throw new Error("MediaType com esse slug já existe");
  }

  // =========================
  // 2. PREPARE DATA
  // =========================

  const mediaTypeData = {
    title: input.title,
    slug: input.slug.toLowerCase(),
    description: input.description,
    isActive: true,
    filters: input.filters ?? [],
    sortOptions: input.sortOptions ?? ["recent", "alphabetical"],
  };

  // =========================
  // 3. PERSISTENCE
  // =========================

  const created = await MediaTypeRepository.create(mediaTypeData);

  return created;
}
