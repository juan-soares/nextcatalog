"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function SearchSort() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function updateSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);

    router.push(`/pesquisa?${params.toString()}`);
  }

  return (
    <div>
      <button onClick={() => updateSort("az")}>A-Z</button>
      <button onClick={() => updateSort("recent")}>Recente</button>
      <button onClick={() => updateSort("release")}>Lançamento</button>
    </div>
  );
}
