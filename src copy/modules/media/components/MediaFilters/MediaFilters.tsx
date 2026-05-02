"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  filters: {
    key: string;
    label: string;
    type: "single" | "multi";
    options: string[];
  }[];
}

export default function MediaFilters({ filters }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function getCurrentValues(key: string) {
    return searchParams.get(key)?.split(",") || [];
  }

  function toggleFilter(key: string, value: string, type: "single" | "multi") {
    const params = new URLSearchParams(searchParams.toString());

    const currentValues = params.get(key)?.split(",") || [];

    let newValues: string[] = [];

    if (type === "single") {
      newValues = [value];
    } else {
      const exists = currentValues.includes(value);

      newValues = exists
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
    }

    if (newValues.length === 0) {
      params.delete(key);
    } else {
      params.set(key, newValues.join(","));
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <aside>
      <h3>Filtros</h3>

      {filters.map((filter) => {
        const currentValues = getCurrentValues(filter.key);

        return (
          <div key={filter.key}>
            <h4>{filter.label}</h4>

            {filter.options.map((option) => {
              const isSelected = currentValues.includes(option);

              return (
                <label key={option}>
                  <input
                    type={filter.type === "single" ? "radio" : "checkbox"}
                    name={filter.key}
                    checked={isSelected}
                    onChange={() =>
                      toggleFilter(filter.key, option, filter.type)
                    }
                  />
                  {option}
                </label>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
}
