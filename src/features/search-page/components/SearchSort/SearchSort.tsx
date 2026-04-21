"use client";

import { Check } from "lucide-react";
import { useSearchSort } from "../../hooks";

export default function SearchSort() {
  const { sorts, currentSort, handleClick } = useSearchSort();

  return (
    <div>
      {sorts.map(({ value, label }) => {
        const isActive = currentSort === value;

        return (
          <button
            key={value}
            onClick={() => handleClick(value)}
            aria-pressed={isActive}
          >
            <span>{label}</span>
            {isActive && <Check size={16} />}
          </button>
        );
      })}
    </div>
  );
}
