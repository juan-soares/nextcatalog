import { SearchPage } from "@/features/search-page";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function PesquisaPage({ searchParams }: Props) {
  const params = await searchParams;

  return <SearchPage {...params} />;
}
