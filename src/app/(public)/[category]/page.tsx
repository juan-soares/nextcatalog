import {
  CategoryFilters,
  CATEGORY_CONFIG,
  FILTER_CONFIG,
  isValidCategory,
} from "@/modules/category";
import { notFound } from "next/navigation";

interface Props {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function CategoryPage({
  params: { category },
  searchParams,
}: Props) {
  if (!isValidCategory(category)) return notFound();

  const categoryLabel = CATEGORY_CONFIG[category].label;
  const categoryFilters = FILTER_CONFIG[category];

  //const { mediaList, totalPages } = await listMedia({
  //   category,
  // searchParams,
  // });

  return (
    <div>
      <h1>{categoryLabel}</h1>
      <CategoryFilters filters={categoryFilters} />
    </div>
  );
}
