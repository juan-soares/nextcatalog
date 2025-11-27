import { search } from "@/src/_features/header/actions/search";

export async function POST(request: Request) {
  const { q } = await request.json();

  const result = await search(q);

  return Response.json(result);
}
