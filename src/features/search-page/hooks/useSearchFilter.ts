import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchFilter(name: string, id: string) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const params = new URLSearchParams(searchParams.toString());
  const values = params.getAll(name);
  const isChecked = values.includes(id);

  const toggleCheck = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    const currentValues = newParams.getAll(name);

    // remove todos os valores dessa chave
    newParams.delete(name);

    if (isChecked) {
      // remove o id atual
      const filtered = currentValues.filter((value) => value !== id);

      filtered.forEach((value) => newParams.append(name, value));
    } else {
      // mantém os existentes + adiciona o novo
      currentValues.forEach((value) => newParams.append(name, value));
      newParams.append(name, id);
    }

    push(`${pathname}?${newParams.toString()}`);
  };

  return { isChecked, toggleCheck };
}
