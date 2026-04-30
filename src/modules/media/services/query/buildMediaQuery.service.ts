type Params = {
  category: string;
  searchParams: Record<string, string | string[] | undefined>;
};

export function buildMediaQuery({ category, searchParams }: Params) {
  const filters: Record<string, any> = {};

  Object.entries(searchParams).forEach(([key, value]) => {
    if (!value || ["sort", "search", "page"].includes(key)) return;

    const values = String(value).split(",");

    filters[key] = { $in: values };
  });

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const searchFilter = search ? { $text: { $search: search } } : {};

  const sortKey =
    typeof searchParams.sort === "string" ? searchParams.sort : "recent";

  let sort: any;

  switch (sortKey) {
    case "title":
      sort = { title: 1 };
      break;
    case "releaseDate":
      sort = { releaseDate: -1 };
      break;
    default:
      sort = { updatedAt: -1 };
  }

  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;

  const safePage = isNaN(page) || page < 1 ? 1 : page;

  const PAGE_SIZE = 10;

  return {
    query: {
      category,
      ...filters,
      ...searchFilter,
    },
    sort,
    page: safePage,
    limit: PAGE_SIZE,
    skip: (safePage - 1) * PAGE_SIZE,
    hasSearch: !!search,
  };
}
