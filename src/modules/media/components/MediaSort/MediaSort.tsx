"use client";

import { SORT_OPTIONS } from "@/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MediaSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "recent";

  function handleSortChange(sort: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", sort);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      {SORT_OPTIONS.map((option) => (
        <button key={option.key} onClick={() => handleSortChange(option.key)}>
          {currentSort === option.key ? `👉 ${option.label}` : option.label}
        </button>
      ))}
    </div>
  );
}
