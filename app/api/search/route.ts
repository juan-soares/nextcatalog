import { getCollection } from "@/app/_data/connection";
import { ICategory, IDatabase, IRecord } from "@/app/_data/data.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";
  const limit = searchParams.get("limit") || null;
  const sortBy = searchParams.get("sortBy") || "recent";

  try {
    const categories: ICategory[] = await getCollection<ICategory>(
      "categories"
    ).find({
      query: {},
    });

    const promises = categories.map(({ collection }) =>
      getCollection(collection).find({ query: {} })
    );

    const results = (await Promise.all(promises)).flat();

    return NextResponse.json(results);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
