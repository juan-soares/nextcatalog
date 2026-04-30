import {
  CategoryFilters,
  CATEGORY_CONFIG,
  FILTER_CONFIG,
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
  isValidCategory(category);

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
