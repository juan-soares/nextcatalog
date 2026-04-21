import { SearchPage } from "@/features/search-page";

interface Props {
  searchParams: Promise<{
    q?: string;
    sort: "alph" | "recent" | "release";
  }>;
}

export default async function PesquisaPage({ searchParams }: Props) {
  const params = await searchParams;

  return <SearchPage {...params} />;
}
