// =========================
// MONGODB → DOMAIN
// =========================

import { MediaType, createMediaType } from "../entity";

export function toDomain(doc: any): MediaType {
  return createMediaType({
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    isActive: doc.isActive,
    filters: doc.filters ?? [],
    sortOptions: doc.sortOptions ?? [],
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  });
}

// =========================
// DOMAIN → MONGODB
// =========================

export function toPersistence(domain: MediaType) {
  return {
    title: domain.title,
    slug: domain.slug,
    description: domain.description,
    isActive: domain.isActive,
    filters: domain.filters,
    sortOptions: domain.sortOptions,
    createdAt: domain.createdAt,
    updatedAt: domain.updatedAt,
  };
}
