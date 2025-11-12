import { useState } from "react";

export function useSearch() {
  const [showResultList, setResultList] = useState<boolean>(false);

  return { showResultList };
}
