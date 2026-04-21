import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchSort() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const currentSort = searchParams.get("sort");

  const handleClick = (sortBy: "alph" | "recent" | "release") => {
    if (currentSort === sortBy) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortBy);
    push(`${pathname}?${params.toString()}`);
  };

  const sorts: { label: string; value: "alph" | "recent" | "release" }[] = [
    { label: "A-Z", value: "alph" },
    { label: "Recente", value: "recent" },
    { label: "Lançamento", value: "release" },
  ];

  return { currentSort, sorts, handleClick };
}
