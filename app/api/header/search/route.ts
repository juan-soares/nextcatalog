import { search } from "@/src/_features/header/actions/search";

export async function POST(request: Request) {
  const { query } = await request.json();

  const result = await search(query);

  return Response.json(result);
}
