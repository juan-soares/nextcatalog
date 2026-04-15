import {
  MediaType,
  MediaTypeFilterKey,
  MediaTypeSortKey,
} from "./media-type.types";

// =========================
// CREATE
// =========================

export function createMediaType(props: MediaType): MediaType {
  return {
    ...props,
    isActive: props.isActive ?? true,
    filters: props.filters ?? [],
    sortOptions: props.sortOptions ?? [],
  };
}

// =========================
// RULES / BEHAVIORS
// =========================

export function activateMediaType(mediaType: MediaType): MediaType {
  return {
    ...mediaType,
    isActive: true,
  };
}

export function deactivateMediaType(mediaType: MediaType): MediaType {
  return {
    ...mediaType,
    isActive: false,
  };
}

export function updateTitle(mediaType: MediaType, title: string): MediaType {
  if (!title || title.trim().length < 2) {
    throw new Error("Title inválido");
  }

  return {
    ...mediaType,
    title: title.trim(),
  };
}

export function updateSlug(mediaType: MediaType, slug: string): MediaType {
  if (!slug || slug.trim().length < 2) {
    throw new Error("Slug inválido");
  }

  return {
    ...mediaType,
    slug: slug.trim().toLowerCase(),
  };
}

// =========================
// FILTERS
// =========================

export function addFilter(
  mediaType: MediaType,
  filter: MediaTypeFilterKey,
): MediaType {
  if (mediaType.filters.includes(filter)) return mediaType;

  return {
    ...mediaType,
    filters: [...mediaType.filters, filter],
  };
}

export function removeFilter(
  mediaType: MediaType,
  filter: MediaTypeFilterKey,
): MediaType {
  return {
    ...mediaType,
    filters: mediaType.filters.filter((f) => f !== filter),
  };
}

// =========================
// SORT
// =========================

export function addSortOption(
  mediaType: MediaType,
  sort: MediaTypeSortKey,
): MediaType {
  if (mediaType.sortOptions.includes(sort)) return mediaType;

  return {
    ...mediaType,
    sortOptions: [...mediaType.sortOptions, sort],
  };
}

export function removeSortOption(
  mediaType: MediaType,
  sort: MediaTypeSortKey,
): MediaType {
  return {
    ...mediaType,
    sortOptions: mediaType.sortOptions.filter((s) => s !== sort),
  };
}
